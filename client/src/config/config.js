export const API_ROOT = 'http://localhost:5000/api/';

export const URI = {
    FULL_TEST_QUESTIONS : 'question/fullTest?subjectId=',
    FULL_TEST_SUBMIT_SCORE : 'FullTestSubmitScore',

    MODAL_LIST: 'modalList',

    GET_COURSES: 'course',
    ADD_COURSE: 'course',

    GROUPS: 'group?subject=all',

    SUBJECTS: 'subject',

    FETCH_CHAPTERS: 'subject/chapter/{0}',
    CHAPTERS: 'chapter',

    LOGIN: 'user/authenticate',
    REGISTRATION: 'user',
    ACTIVATE_USER: 'user/{0}/activateUser',
    RESET_PASSWORD_LINK: 'user/resetPasswordLink',
    
    UPLOAD: 'question'
}