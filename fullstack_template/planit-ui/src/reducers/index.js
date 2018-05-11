import { combineReducers } from 'redux';

import User from './User';
import AllOrgs from './AllOrgs';
import AdminOrgs from './AdminOrgs';
import MemberOrgs from './MemberOrgs';
import AdminEvents from './AdminEvents';
import AllEvents from './AllEvents';
import RSVPEvents from './RSVPEvents';
import EventComments from './EventComments';

const rootReducer = combineReducers({User, AllOrgs, AdminOrgs, MemberOrgs, AdminEvents, AllEvents, RSVPEvents, EventComments});

export default rootReducer;