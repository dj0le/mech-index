from fastapi import Depends, FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from fastapi.staticfiles import StaticFiles

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["https://fast.thockyspace.com/"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["GET"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="mech_app/static"), name="static")

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/", response_model=list[schemas.MechShort])
def get_mechs(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    mechs = crud.get_mech_short(db, skip=skip, limit=limit)
    return mechs

@app.get("/details/{mech_id}", response_model=schemas.Mech)
def get_mech(request: Request, mech_id: int, db: Session = Depends(get_db)):
    mech_details = crud.get_mech(db, mech_id=mech_id)
    if mech_details is None:
        raise HTTPException(status_code=404, detail="Unknown Mech")
    return mech_details