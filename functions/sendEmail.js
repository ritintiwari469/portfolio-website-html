import emailjs from 'emailjs-com';

export async function handler(event, context) {
  try {
    const { to_name, from_name, message } = JSON.parse(event.body);

    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { to_name, from_name, message },
      process.env.EMAILJS_PUBLIC_KEY
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
}
