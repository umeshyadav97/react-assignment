import { useEffect, useState } from "react";

export function useNewAssesmentController() {
  const [openForm, setOpenForm] = useState(false);

  const handleChange = () => {
    setOpenForm(!openForm);
  };


  return {
    openForm,
    handleChange,
  };
}
