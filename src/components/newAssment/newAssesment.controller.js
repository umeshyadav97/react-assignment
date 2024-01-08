import { useEffect, useState } from "react";

export function useNewAssesmentController() {
     const [openForm, setOpenForm] = useState(false);

  const handleChange = () => {
    setOpenForm(!openForm);
  };

  useEffect(() => {
    console.log("openForm state changed:", openForm);
  }, [openForm]);
    return {
        openForm,handleChange
    }
}