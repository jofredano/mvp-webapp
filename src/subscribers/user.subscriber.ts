import { EventSubscriber, On } from 'event-dispatch';

@EventSubscriber()
export default class UserSubscriber {

    @On('signup-user')
    public onUserSignIn( user: any ) {

    }

}