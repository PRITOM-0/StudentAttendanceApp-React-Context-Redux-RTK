export const studentReducer = (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT": {
      const newStudent = {
        id: Date.now() + "",
        name: action.payload.name,
        class: action.payload.class,
        status: undefined,
        editMode: false,
      };
      return {
        ...state,
        studentList: [...state.studentList, newStudent],
      };
    }
    case "DELETE_STUDENT": {
      return {
        ...state,
        studentList: [
          ...state.studentList.filter((el) => el.id !== action.payload),
        ],
      };
    }
    case "EDIT_STUDENT": {
      return {
        ...state,
        studentList: [
          ...state.studentList.map((el) => {
            if (action.payload.student.id == el.id) {
              return {
                ...el,
                editMode: true,
              };
            }
            return el;
          }),
        ],
      };
    }
    case "UPDATE_STUDENT": {
      if (
        action.payload.name.trim() === "" ||
        action.payload.class.trim() === ""
      ) {
        alert("Enter Student Information");
        return state;
      }
      return {
        ...state,
        studentList: [
          ...state.studentList.map((el) => {
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
        ],
      };
    }
    case "MAKE_PRESENT": {
      return {
        ...state,
        studentList: [
          ...state.studentList.map((el) => {
            if (action.payload.student.id == el.id) {
              return {
                ...el,
                status: true,
              };
            }
            return el;
          }),
        ],
      };
    }
    case "MAKE_ABSENT": {
      return {
        ...state,
        studentList: [
          ...state.studentList.map((el) => {
            if (action.payload.student.id == el.id) {
              return {
                ...el,
                status: false,
              };
            }
            return el;
          }),
        ],
      };
    }
    case "": {
    }
    case "": {
    }
    case "": {
    }
  }
};
