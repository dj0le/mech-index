from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker

SQL_DATABASE_URL = "sqlite:///./mwomechs.db"

engine = create_engine(
    SQL_DATABASE_URL, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    pass
