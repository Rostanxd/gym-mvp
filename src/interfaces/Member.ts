import User from './User';

export default interface Member extends User{
  membership: string,
  start_date: string,
  end_date: string,
  status: string,
}
