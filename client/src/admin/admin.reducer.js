import { admin } from './admin.constants';

const initialState = {
    coursesList: [],
    coursesLoading: false,
    coursesError: null,

    newCourse: [],
    newCourseLoading: false,
    newCourseError: null,

    groupsList: [],
    groupsLoading: false,
    groupsError: null,
}

const reducer = (state = initialState, action) =>{
    switch(action.type){

    case admin.COURSES_LOADING: 
        return { ...state, coursesLoading: true }
    case admin.COURSES_SUCCESS:
        return { ...state, coursesList: state.coursesList.concat(action.payload), coursesLoading: false }
    case admin.COURSES_FAILURE: 
        return { ...state, coursesList: [], coursesError: action.payload, coursesLoading: false }

    case admin.ADD_COURSE_LOADING: 
        return { ...state, newCourseLoading: true }
    case admin.ADD_COURSE_SUCCESS:
        return { 
                ...state,
                coursesList : state.coursesList.concat(action.payload),
                coursesLoading: false
            }
    case admin.ADD_COURSE_FAILURE: 
        return { ...state, newCourse: [], newCourseError: action.payload, newCourseLoading: false }

    case admin.GROUPS_LOADING: 
        return { ...state, groupsLoading: true }
    case admin.GROUPS_SUCCESS:
        return { ...state, groupsList: state.groupsList.concat(action.payload), groupsLoading: false }
    case admin.GROUPS_FAILURE: 
        return { ...state, groupsList: [], groupsError: action.payload, groupsLoading: false }

    default :
        return state
    }  
};

export default reducer;