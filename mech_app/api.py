from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from fastapi.staticfiles import StaticFiles

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


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/", response_model=list[schemas.Mech])
def get_mechs(db: Session = Depends(get_db)):
    return crud.get_all_mechs(db)
