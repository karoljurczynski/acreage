import { FieldSegment } from './FieldStyles';
import { FieldsPattern } from '../../config/fields';
import { useState } from 'react';
import FieldMenu from '../FieldMenu/FieldMenu';

interface FieldProps {
  fieldData: FieldsPattern;
}

const Field: React.FC<FieldProps> = ({ fieldData }) => {

  const [isFieldClicked, setIsFieldClicked] = useState(false);
  const handleFieldOnClick = () => {
    isFieldClicked ? setIsFieldClicked(false) : setIsFieldClicked(true);
  }

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