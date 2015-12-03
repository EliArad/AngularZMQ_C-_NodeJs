
app.config(function($stateProvider, $urlRouterProvider, $httpProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('register' , {
    url:'/register',
    templateUrl: '/client/views/register.html',
    controller: 'RegistrationController'
  }).state('main' , {
    url:'/',
    templateUrl: '/client/views/main.html',
    controller: 'MainController'
  }).state('contact' , {
    url:'/contact',
    controller: 'ContactController',
    templateUrl: '/client/views/contact.html'
  }).state('about' , {
    url:'/about',
    controller: 'AboutController',
    templateUrl: '/client/views/about.html'
  }).state('newmember' , {
    url:'/newmember',
    controller: 'ContinueRegistrationController',
    templateUrl: '/client/views/continueregistration.html'
  }).state('logout' , {
    url:'/logout',
    controller: 'LogoutController'
  }).state('login' , {
    url:'/login',
    controller: 'LoginController',
    templateUrl: '/client/views/login.html'
  });


  //$httpProvider.interceptors.push('authIntercepter');



});

