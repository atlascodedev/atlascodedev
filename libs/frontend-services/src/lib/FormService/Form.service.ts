// https://us-central1-atlascodedev-landing.cloudfunctions.net/api/sendMail/atlascode
import Axios from 'axios';

export class FormService {
  private static contactFormEndpoint =
    'https://us-central1-atlascodedev-landing.cloudfunctions.net/api/sendMail/atlascode';

  public static async postContact(
    email: string,
    name: string,
    phone: string,
    message: string
  ) {
    return await Axios.post(this.contactFormEndpoint, {
      email: email,
      name: name,
      phone: phone,
      message: message,
    });
  }
}

export default FormService;
