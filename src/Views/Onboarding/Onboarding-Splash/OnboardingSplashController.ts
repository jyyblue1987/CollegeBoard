namespace CollegeBoard.Controllers {

    export class OnboardingSplashController extends BaseController<ViewModels.EmptyViewModel> {

        //#region Injection

        public static ID = "OnboardingSplashController";

        public static get $inject(): string[] {
            return [
                "$scope",
                "$location",
                "$ionicHistory",
                Services.Utilities.ID,
                Services.UiHelper.ID,
                Services.Configuration.ID,
                Services.Auth0.ID
            ];
        }

        constructor(
            $scope: ng.IScope,
            private $location: ng.ILocationService,
            private $ionicHistory: any,
            private Utilities: Services.Utilities,
            private UiHelper: Services.UiHelper,
            private Configuration: Services.Configuration,
            private Auth0:Services.Auth0) {
            super($scope, ViewModels.EmptyViewModel);
        }

        //#endregion

        //#region BaseController Overrides

        protected view_beforeEnter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void {
            super.view_beforeEnter(event, eventArgs);
            
            // During onboarding the menu shouldn't be visible.
            _.defer(() => {
                this.UiHelper.setAllowSideMenu(false);
            });
        }

        protected view_loaded(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void {
            super.view_loaded(event,eventArgs);
            this.Auth0.login();
        }

        //#endregion

        //#region UI Events

        protected skip_click(): void {

            // Allow the side menu to be shown again.
            this.UiHelper.setAllowSideMenu(true);

            // Set the preference value so onboarding doesn't occur again.
            this.Configuration.hasCompletedOnboarding = true;

            // Tell Ionic to to hide the back button for the next view.
            this.$ionicHistory.nextViewOptions({
                disableBack: true
            });

            // Navigate the user to their default view.
            this.$location.path(this.Utilities.defaultCategory.href.substring(1));
            this.$location.replace();
        }

        //#endregion
    }
}
