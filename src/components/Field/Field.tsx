import { FieldSegment } from './FieldStyles';
import { FieldsPattern } from '../../config/fields';
import { useState, useEffect } from 'react';
import FieldMenu from '../FieldMenu/FieldMenu';
import { portal } from '../../config/StylesConfig';

interface FieldProps {
  fieldData: FieldsPattern;
}

const Field: React.FC<FieldProps> = ({ fieldData }) => {

  const [isFieldClicked, setIsFieldClicked] = useState(false);
  const handleFieldOnClick = () => {
    isFieldClicked ? setIsFieldClicked(false) : setIsFieldClicked(true);
  }

  useEffect(() => {
    isFieldClicked ? portal.style.zIndex = "1" : portal.style.zIndex = "-1";
    
    return () => { portal.style.zIndex = "-1" };

  }, [ isFieldClicked ]);

  return (
    <>
    { isFieldClicked && 
      <FieldMenu
        closeFieldMenu={ handleFieldOnClick }
        fieldData={ fieldData }
      />
    }
    
    <FieldSegment 
      fieldCrop={ fieldData.cropProps.cropType } 
      fieldStatus={ fieldData.isFieldBought } 
      onClick={ handleFieldOnClick }
    />

    </> 
  )
}

export default Field;