import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: 'smtpdm-eu-central-1.aliyuncs.com', // SMTP host
    port: 465, // Port for secure connection (usually 465 for SSL/TLS)
    secure:true,
    auth: {
        user: 'service@mx.gtcmail.com', // SMTP username
        pass: 'ServiceMail123', // SMTP password
    },
});

export const mailOptions = {
    from: "service@mx.gtcmail.com",
    to:"support@gtcfx.com, support@gtcup.com, servicebot@gtcfx.com", 
    bcc: 'mohammad.zeeshan@gtcfx.com',
}


export const mailOptionsJobs = {
    from: "service@mx.gtcmail.com",
    to:"careers@gtcfx.com",
    bcc: 'zeeshan@gtcfx.com',
}


