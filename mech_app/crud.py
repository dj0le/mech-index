from sqlalchemy.orm import Session

from . import models


def get_all_mechs(db: Session):
    return (
        db.query(
            models.Mech.id,
            models.Mech.shortName,
            models.Mech.chassis,
            models.Mech.weightClass,
            models.Mech.role,
            models.Mech.weight,
            models.Mech.year,
            models.Mech.cost,
            models.Mech.bv,
            models.Mech.origin,
            models.Mech.armorType,
            models.Mech.externalArmor,
            models.Mech.internalArmor,
            models.Mech.structureType,
            models.Mech.engine,
            models.Mech.heatCapacity,
            models.Mech.heatSinks,
            models.Image.thumbnail,
            models.Image.fullsize,
        )
        .join(models.Image, models.Mech.id == models.Image.mech_id)
        .order_by(models.Mech.chassis)
        .all()
    )
