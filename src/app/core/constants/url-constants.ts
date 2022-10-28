export class URLConstants {
    // User routes
    public static AUTHENTICATE_API: string = 'v1/users/authenticate';
    public static REGISTER_USER_API: string = 'v1/users/register';
    public static UPDATE_USER_API: string = 'v1/users/update';
    public static GET_USERS_API: string = 'v1/users/getAll';
    public static GET_USER_BYID_API: string = 'v1/users/getById';
    public static AUTH_ME_API: string = 'v1/users/authMe';
    public static GET_USER_NOTIFICATIONS_API: string = 'v1/users/getUserNotifications';

    // Role routes
    public static CREATE_ROLE_API: string = 'v1/roles/create';
    public static GET_ROLE_BY_ID_API: string = 'v1/roles/getById';
    public static GET_ROLES_API: string = 'v1/roles/getAll';

    // Event routes
    public static CREATE_EVENT_API: string = 'v1/events/create';
    public static GET_EVENT_BY_ID_API: string = 'v1/events/getById';
    public static GET_EVENTS_API: string = 'v1/events/getAll';

    // Task routes
    public static CREATE_TASK_API: string = 'v1/tasks/create';
    public static GET_TASK_BY_ID_API: string = 'v1/tasks/getById';
    public static UPDATE_TASK_API: string = 'v1/tasks/update';
    public static DELETE_TASK_API: string = 'v1/tasks/deleteTask';
    public static GET_TASKS_API: string = 'v1/tasks/getTasks';

    // Article routes
    public static CREATE_ARTICLE_API: string = 'v1/articles/create';
    public static GET_ARTICLE_BY_ID_API: string = 'v1/articles/getById';
    public static UPDATE_ARTICLE_API: string = 'v1/articles/update';
    public static DELETE_ARTICLE_API: string = 'v1/articles/deleteArticle';
    public static GET_ARTICLES_API: string = 'v1/articles/getArticles';

    // Podcast routes
    public static INFORM_PODCAST_AVAILABLE_API: string = 'v1/podcasts/informNewPodcastIsAvailable';
    public static GET_PODCASTS_API: string = 'v1/podcasts/getPodcasts';
    public static READ_PODCASTS_API: string = 'v1/podcasts/readPodcasts';

    // Question and Answer routes
    public static CREATE_QUESTION_API: string = 'v1/question-and-answers/create';
    public static GET_QUSTION_ANSWERS_BY_ID_API: string = 'v1/question-and-answers/getQuestionAnswersById';
    public static UPDATE_QUESTION_API: string = 'v1/question-and-answers/update';
    public static ANSWER_A_QUESTION_API: string = 'v1/question-and-answers/answerAQuestion';
    public static VIEW_ANSWERED_QUESTIONS_API: string = 'v1/question-and-answers/viewAnsweredQuestions';
    public static DELETE_QUESTION_API: string = 'v1/question-and-answers/deleteQuestion';
    public static GET_QUESTIONS_API: string = 'v1/question-and-answers/getQuestions';

    // State routes
    public static CREATE_STATE_API: string = 'v1/states/create';
    public static GET_STATE_BY_ID_API: string = 'v1/states/getById';
    public static GET_STATES_API: string = 'v1/states/getStates';

    // District routes
    public static CREATE_DISTRICT_API: string = 'v1/districts/create';
    public static GET_DISTRICT_BY_STATE_ID_API: string = 'v1/districts/getByStateId';
    public static GET_DISTRICT_BY_ID_API: string = 'v1/districts/getById';
    public static GET_DISTRICTS_API: string = 'v1/districts/getDistricts';
    
	// School routes
    public static CREATE_SCHOOL_API: string = 'v1/schools/create';
    public static GET_SCHOOL_BY_ID_API: string = 'v1/schools/getById';
    public static GET_SCHOOL_BY_DISTRICT_ID_API: string = 'v1/schools/getByDistrictId';
    public static GET_SCHOOLS_API: string = 'v1/schools/getSchools';
}