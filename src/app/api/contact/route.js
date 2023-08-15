import nodemailer from 'nodemailer';

export const POST = async (req,res) => {
    // require('dotenv').config()
    // const PASSWORD = process.env.password
    // let nodemailer = require('nodemailer')
    // // const transporter = nodemailer.createTransport({});
    // // console.log(req.body)
    // try{
    // const transporter = nodemailer.createTransport({
    //     port: 465,
    //     host: "smtp.gmail.com",
    //     auth: {
    //       user: 'i.omer6637@gmail.com',
    //       pass: 'gfecdcsxzfygalyp',
    //     },
    //     secure: true,
    //   })

    //   const mailData = {
    //     from: 'i.omer6637@gmail.com',
    //     to: 'i.omer6637@gmail.com',
    //     subject: `Message From ${req.body.name}`,
    //     text: req.body.message,
    //     html: <div>{req.body.message}</div>
    //    }
    //    transporter.sendMail(mailData, function (err, info) {
    //     if(err)
    //       console.log(err)
    //     else
    //       console.log(info)
    //   })
    // }catch(e){
    //     console.log(e)
        
    // }
    // return new Response("test", {status: 200,});

    try {
        // console.log('test',await req.json());
        const {name, email ,message} = await req.json();
        // console.log(name);
        const transporter = nodemailer.createTransport({
          port: 465,
          host: 'smtp.gmail.com',
          auth: {
            user: 'i.omer6637@gmail.com',
            pass: 'gfecdcsxzfygalyp', // Use your actual password or access token here
          },
          secure: true,
        });
    
        const mailData = {
          from: 'i.omer6637@gmail.com',
          to: 'i.omer6637@gmail.com',
          subject: `Message from ${name} (${email})`,
        //   text: message,
          html: `<div>${message}</div>`, // Convert JSX to a string
        };
    
        const info = await transporter.sendMail(mailData);
        // console.log(info);
        // return res.status(200).json({ message: 'Email sent successfully' });
        return new Response("Email sent successfully", {status: 200,});
      } catch (error) {
        console.error(error);
        // return res.status(500).json({ error: 'An error occurred while sending the email' });
        return new Response("An error occurred while sending the email", {status: 500,});
      }

}