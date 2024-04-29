from sqlalchemy.orm import Session
from sqlalchemy.sql.expression import func

from . import models

def get_mech(db: Session, mech_id: int):
    return db.query(models.Mech.chassis, models.Mech.model, models.Mech.year, models.Mech.weight, models.Mech.weightClass, models.Mech.cost, models.Mech.bv, models.Mech.isClan, models.Mech.armorType, models.Mech.totalExternalArmor, models.Mech.totalInternalArmor, models.Mech.structureType, models.Mech.engine, models.Mech.heatCapacity, models.Mech.heatSinks, models.Image.fullsize).join(models.Mech, models.Mech.id == models.Image.mech_id).filter(models.Mech.id == mech_id).first()

def get_mech_long(db: Session, mech_id: int):
    return db.query(models.Mech.id, models.Mech.chassis, models.Mech.model, models.Mech.weightClass, models.Mech.weight, models.Mech.year, models.Mech.cost, models.Mech.bv, models.Mech.isClan, models.Mech.armorType, models.Mech.totalExternalArmor, models.Mech.totalInternalArmor, models.Mech.structureType, models.Mech.engine, models.Mech.heatCapacity, models.Mech.heatSinks, models.Image.fullsize).join(models.Mech, models.Mech.id == models.Image.mech_id).filter(models.Mech.id == mech_id).first()

def get_mech_cards(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Mech.id, models.Mech.chassis, models.Mech.weightClass, models.Mech.year, models.Image.thumbnail).join(models.Mech,models.Image.mech_id == models.Mech.id).order_by(func.random()).offset(skip).limit(limit).all()



def get_mech_cards2(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Mech.id, models.Mech.chassis, models.Mech.model, models.Mech.weightClass, models.Mech.weight, models.Mech.year, models.Mech.cost, models.Mech.bv, models.Mech.isClan, models.Mech.armorType, models.Mech.totalExternalArmor, models.Mech.totalInternalArmor, models.Mech.structureType, models.Mech.engine, models.Mech.heatCapacity, models.Mech.heatSinks, models.Image.fullsize).join(models.Mech,models.Image.mech_id == models.Mech.id).order_by(func.random()).offset(skip).limit(limit).all()
