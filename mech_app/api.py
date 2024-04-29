from fastapi import Depends, FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["GET"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="mech_app/static"), name="static")
templates = Jinja2Templates(directory="mech_app/templates")


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_filters():
    with Session(engine) as db:
        ranks = []
        mech_classes = db.query(models.Mech.weightClass).distinct()
        for rank in mech_classes:
            print(rank)
            ranks.append(rank)
            return ranks
    
filters = sorted(get_filters())
print(filters)

@app.get("/", response_class=HTMLResponse, include_in_schema=False)
def get_mech_cards(request: Request, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    mech_short = crud.get_mech_short(db, skip=skip, limit=limit)
    return templates.TemplateResponse(
        "index.html", {"request": request, 'mech_cards': mech_short}
    )

@app.get("/mechs/{mech_id}", response_class=HTMLResponse, include_in_schema=False)
def get_mech(request: Request, mech_id: int, db: Session = Depends(get_db)):
    mech_details = crud.get_mech(db, mech_id=mech_id)
    if mech_details is None:
        raise HTTPException(status_code=404, detail="Unknown Mech")
    return templates.TemplateResponse(
        "overview.html", {"request": request, 'mech': mech_details}
    )

@app.get("/mechs/", response_model=list[schemas.MechShort])
def get_mechs(skip: int = 0, limit: int = 30, db: Session = Depends(get_db)):
    mechs = crud.get_mech_short(db, skip=skip, limit=limit)
    return mechs

@app.get("/details/{mech_id}", response_model=schemas.Mech)
def get_mech(request: Request, mech_id: int, db: Session = Depends(get_db)):
    mech_details = crud.get_mech(db, mech_id=mech_id)
    if mech_details is None:
        raise HTTPException(status_code=404, detail="Unknown Mech")
    return mech_details