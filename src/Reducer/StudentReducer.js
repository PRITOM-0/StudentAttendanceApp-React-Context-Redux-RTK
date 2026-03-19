import { demoList } from "../assets/data";

export const studentReducer = (state = demoList, action) => {
  console.log(state)
  switch (action.type) {
    case "StudentState/ADD_STUDENT": {
      console.log("hoop")
      const newStudent = {
        id: Date.now() + "",
        name: action.payload.name,
        class: action.payload.class,
        status: undefined,
        editMode: false,
      };
      return [...state, newStudent];
    }
    case "StudentState/DELETE_STUDENT": {
      return [...state.filter((el) => el.id !== action.payload)];
    }
    case "StudentState/EDIT_STUDENT": {
      return [
        ...state.map((el) => {
          if (action.payload.student.id == el.id) {
            return {
              ...el,
              editMode: true,
            };
          }
          return el;
        }),
      ];
    }
    case "StudentState/UPDATE_STUDENT": {
      if (
        action.payload.name.trim() === "" ||
        action.payload.class.trim() === ""
      ) {
        alert("Enter Student Information");
        return state;
      }
      return [
        ...state.map((el) => {
          if (action.payload.std.id == el.id) {
            return {
              ...el,
              name: action.payload.name,
              class: action.payload.class,
              editMode: false,
            };
          }
          return el;
        }),
      ];
    }
    case "StudentState/MAKE_PRESENT": {
      return [
        ...state.map((el) => {
          if (action.payload.student.id == el.id) {
            return {
              ...el,
              status: true,
            };
          }
          return el;
        }),
      ];
    }
    case "StudentState/MAKE_ABSENT": {
      return [
        ...state.map((el) => {
          if (action.payload.student.id == el.id) {
            return {
              ...el,
              status: false,
            };
          }
          return el;
        }),
      ];
    }
    default: {
      return state;
    }
  }
};
