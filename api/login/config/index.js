import routes from "../src/routes";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongooseUser from '../src/db/user/user.Mongoose'
import mongooseSession from '../src/db/session/session.Mongoose'

export default (app) => {
  

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // parse application/json
  app.use(bodyParser.json());

  // parse cookie
  app.use(cookieParser())

  routes(app);

  mongooseUser()
mongooseSession()



};
