from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from .database import Base


class Mech(Base):
    __tablename__ = "mwomechs"

    id = Column(Integer, primary_key=True)
    shortName = Column(String)
    chassis = Column(String)
    model = Column(String)
    year = Column(Integer)
    weight = Column(Integer)
    weightClass = Column(String)
    role = Column(String)
    cost = Column(Integer)
    bv = Column(Integer)
    origin = Column(String)
    armorType = Column(String)
    externalArmor = Column(Integer)
    internalArmor = Column(Integer)
    structureType = Column(String)
    engine = Column(String)
    heatCapacity = Column(Integer)
    heatSinks = Column(Integer)

    images = relationship("Image", back_populates="mech")


class Image(Base):
    __tablename__ = "mech_images"

    id = Column(Integer, primary_key=True)
    fullsize = Column(String)
    thumbnail = Column(String)
    mech_id = Column(Integer, ForeignKey("mwomechs.id"))

    mech = relationship("Mech", back_populates="images")
