import nodemailer from 'nodemailer';

export const POST = async (req,res) => {
    
    try {
        
        const {name, email ,message} = await req.json();
        
        const transporter = nodemailer.createTransport({
          port: 465,
          host: 'smtp.gmail.com',
          auth: {
            user: 'i.omer6637@gmail.com',
            pass: 'gfecdcsxzfygalyp', 
          },
          secure: true,
        });
    
        let from = `Omer Farooq <i.omer6637@gmail.com>`
        const mailData = {
          from: 'i.omer6637@gmail.com',
          to: 'i.omer6637@gmail.com',
          subject: `Message from ${name} (${email})`,
        
          html: `<div>${message}</div>`, 
        };

        const mail2Data = {
          from: from,
          to: email,
          subject: `Thank You for Contacting me`,
       
          html: `<div> Dear ${name}, <br><br> &emsp; &emsp; &emsp;
          I hope this email finds you well. Thank you for reaching out to me. I appreciate your interest and would like to assure you that your message has been received. <br>

           &emsp; &emsp; &emsp;

          I understand the importance of your inquiry and the urgency it may entail. Please be assured that I will prioritize your request and provide you with a comprehensive response as soon as possible. Your patience during this process is greatly appreciated. <br>
          
           &emsp; &emsp; &emsp;

          In the meantime, if you have any additional information or specific details that you would like to share, please feel free to include them in your reply to this email. This will help me better understand your needs and ensure that my response addresses all of your concerns thoroughly. <br>
          
           &emsp; &emsp; &emsp;

          Once again, thank you for considering me as a point of contact for your inquiry. I am committed to providing you with the highest level of assistance and look forward to assisting you further. <br> <br>
          Best Regards,<br><br>
          Omer Farooq
          <br>

          </div>`, 
        };

        const infoo = await transporter.sendMail(mail2Data);
    
        const info = await transporter.sendMail(mailData);
        
        return new Response("Email sent successfully", {status: 200,});
      } catch (error) {
        console.error(error);
        // return res.status(500).json({ error: 'An error occurred while sending the email' });
        return new Response("An error occurred while sending the email", {status: 500, message: "An error occurred while sending the email"});
      }

}