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

    newGroup: [],
    newGroupLoading: false,
    newGroupError: null,

    subjectsList: [],
    subjectsLoading: false,
    subjectsError: null,

    newSubject: [],
    newSubjectLoading: false,
    newSubjectError: null,

    chaptersList: [],
    chaptersLoading: false,
    chaptersError: null,

    newChapter: [],
    newChapterLoading: false,
    newChapterError: null,
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

    case admin.ADD_GROUP_LOADING: 
        return { ...state, newGroupLoading: true }
    case admin.ADD_GROUP_SUCCESS:
        return { 
                ...state,
                groupsList : state.groupsList.concat(action.payload),
                newGroupLoading: false
            }
    case admin.ADD_GROUP_FAILURE: 
        return { ...state, newGroup: [], newGroupError: action.payload, newGroupLoading: false }

    case admin.SUBJECTS_LOADING: 
        return { ...state, subjectsLoading: true }
    case admin.SUBJECTS_SUCCESS:
        return { ...state, subjectsList: state.subjectsList.concat(action.payload), subjectsLoading: false }
    case admin.SUBJECTS_FAILURE: 
        return { ...state, subjectsList: [], subjectsError: action.payload, subjectsLoading: false }

    case admin.ADD_SUBJECT_LOADING: 
        return { ...state, newSubjectLoading: true }
    case admin.ADD_SUBJECT_SUCCESS:
        return { 
                ...state,
                subjectsList : state.subjectsList.concat(action.payload),
                newSubjectLoading: false
            }
    case admin.ADD_SUBJECT_FAILURE: 
        return { ...state, newSubject: [], newSubjectError: action.payload, newSubjectLoading: false }

    case admin.CHAPTERS_LOADING: 
        return { ...state, chaptersLoading: true }
    case admin.CHAPTERS_SUCCESS:
        return { ...state, chaptersList: state.chaptersList.concat(action.payload), chaptersLoading: false }
    case admin.CHAPTERS_FAILURE: 
        return { ...state, chaptersList: [], chaptersError: action.payload, chaptersLoading: false }

    case admin.ADD_CHAPTER_LOADING: 
        return { ...state, newChapterLoading: true }
    case admin.ADD_CHAPTER_SUCCESS:
        return { 
                ...state,
                chaptersList : state.chaptersList.concat(action.payload),
                newChapterLoading: false
            }
    case admin.ADD_SUBJECT_FAILURE: 
        return { ...state, newChapter: [], newChapterError: action.payload, newChapterLoading: false }

    default :
        return state
    }  
};

export default reducer;