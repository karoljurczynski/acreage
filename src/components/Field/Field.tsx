import { FieldSegment } from './FieldStyles';
import { useState } from 'react';
import FieldMenu from '../FieldMenu/FieldMenu';

interface FieldProps {
  fieldId: number,
  fieldCrop: string,
  fieldStatus: string
}

const Field: React.FC<FieldProps> = ({ fieldId, fieldCrop, fieldStatus }) => {

  const [isFieldClicked, setIsFieldClicked] = useState(false);
  const handleFieldOnClick = () => {
    isFieldClicked ? setIsFieldClicked(false) : setIsFieldClicked(true);
  }

  return (
    <>
    { isFieldClicked && 
      <FieldMenu
        closeFieldMenu={ handleFieldOnClick }
      />
    }
    
    <FieldSegment 
      fieldCrop={ fieldCrop } 
      fieldStatus={ fieldStatus } 
      onClick={ handleFieldOnClick }
    />

    </> 
  )
}

export default Field;