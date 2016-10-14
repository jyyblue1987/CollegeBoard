
/**
 * A common location for application-wide constant values.
 */
namespace CollegeBoard.Constants {

    /**
     * Value for rejection of a promise when opening a dialog using the showDialog
     * helper method. This value will be used when showDialog was called with a dialog
     * ID of a dialog that is already open.
     */
    export const DIALOG_ALREADY_OPEN = "DIALOG_ALREADY_OPEN";

    /**
     * Value for rejection of a promise when opening a dialog using the showDialog
     * helper method. This value will be used when showDialog was called with a dialog
     * ID who is not registered in the dialogTemplateMap map.
     */
    export const DIALOG_ID_NOT_REGISTERED = "DIALOG_ID_NOT_REGISTERED";
}

/**
 * A collection of titles for buttons commonly used with dialogs.
 */
namespace CollegeBoard.Constants.Buttons {
    export const Yes = "Yes";
    export const No = "No";
    export const OK = "OK";
    export const Cancel = "Cancel";
}

/**
 * A collection of names of events used within the application.
 */
namespace CollegeBoard.Constants.Events {
    export const HTTP_UNAUTHORIZED = "http.unauthorized";
    export const HTTP_FORBIDDEN = "http.forbidden";
    export const HTTP_NOT_FOUND = "http.notFound";
    export const HTTP_UNKNOWN_ERROR = "http.unknownError";
    export const HTTP_ERROR = "http.error";

    export const APP_MENU_BUTTON = "app.menuButton";
}

namespace CollegeBoard.Constants.Auth0 {
    export const AUTH0_CLIENT_ID = 'I2qkuIKJstgXNv4kB9bV0HtAMZybLiME';
    export const AUTH0_CALLBACK_URL = location.href;
    export const AUTH0_DOMAIN = 'techamante.auth0.com';
    export const AUTHO_CONTAINER_ID ="auth0-login-panel";
}
