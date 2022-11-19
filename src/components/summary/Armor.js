import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { charActions } from "../../redux/slices/charSlice";


const Armor = (props) => {
    const armors = useSelector((state) => state.char.armors);
    
    const lightArmor = useSelector((state) => state.char.armors.lightArmor.proficiency);
    const lightArmorPot = useSelector((state) => state.char.armors.lightArmor.potentialArmorProficiency);

    const leatherArmor = useSelector((state) => state.char.armors.leatherArmor.proficiency);
    const leatherArmorPot = useSelector((state) => state.char.armors.leatherArmor.potentialArmorProficiency);

    const paddedArmor = useSelector((state) => state.char.armors.paddedArmor.proficiency);
    const paddedArmorPot = useSelector((state) => state.char.armors.paddedArmor.potentialArmorProficiency);

    const studdedLeatherArmor = useSelector((state) => state.char.armors.studdedLeatherArmor.proficiency);
    const studdedLeatherArmorPot = useSelector((state) => state.char.armors.studdedLeatherArmor.potentialArmorProficiency);

    const mediumArmor = useSelector((state) => state.char.armors.mediumArmor.proficiency);
    const mediumArmorPot = useSelector((state) => state.char.armors.mediumArmor.potentialArmorProficiency);

    const breastplate = useSelector((state) => state.char.armors.breastplate.proficiency);
    const breastplatePot = useSelector((state) => state.char.armors.breastplate.potentialArmorProficiency);

    const chainShirt = useSelector((state) => state.char.armors.chainShirt.proficiency);
    const chainShirtPot = useSelector((state) => state.char.armors.chainShirt.potentialArmorProficiency);

    const halfPlateArmor = useSelector((state) => state.char.armors.halfPlateArmor.proficiency);
    const halfPlateArmorPot = useSelector((state) => state.char.armors.halfPlateArmor.potentialArmorProficiency);

    const hideArmor = useSelector((state) => state.char.armors.hideArmor.proficiency);
    const hideArmorPot = useSelector((state) => state.char.armors.hideArmor.potentialArmorProficiency);

    const scaleMail = useSelector((state) => state.char.armors.scaleMail.proficiency);
    const scaleMailPot = useSelector((state) => state.char.armors.scaleMail.potentialArmorProficiency);

    const heavyArmor = useSelector((state) => state.char.armors.heavyArmor.proficiency);
    const heavyArmorPot = useSelector((state) => state.char.armors.heavyArmor.potentialArmorProficiency);

    const chainMail = useSelector((state) => state.char.armors.chainMail.proficiency);
    const chainMailPot = useSelector((state) => state.char.armors.chainMail.potentialArmorProficiency);

    const plateArmor = useSelector((state) => state.char.armors.plateArmor.proficiency);
    const plateArmorPot = useSelector((state) => state.char.armors.plateArmor.potentialArmorProficiency);

    const ringMail = useSelector((state) => state.char.armors.ringMail.proficiency);
    const ringMailPot = useSelector((state) => state.char.armors.ringMail.potentialArmorProficiency);

    const splintArmor = useSelector((state) => state.char.armors.splintArmor.proficiency);
    const splintArmorPot = useSelector((state) => state.char.armors.splintArmor.potentialArmorProficiency);

    const shields = useSelector((state) => state.char.armors.shields.proficiency);
    const shieldsPot = useSelector((state) => state.char.armors.shields.potentialArmorProficiency);


  return <p>Armors: {}</p>;
};
export default Armor;
