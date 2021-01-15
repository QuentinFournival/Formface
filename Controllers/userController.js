const express = require('express');
const User = require('../Domain/Domain_Services/Models/userModel');
const Answer = require('../Domain/Domain_Services/Models/answerModel')
const DB = require('../Domain/Data/dbConnection');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
const env = dotenv.config()



module.exports = {

    create(req,res){
        if(req.body.Name != "" && req.body.Name != null && req.body.FirstName != "" && req.body.FirstName!=null && req.body.Email != "" && req.body.Email != null ){
            User.findOne({Email: req.body.Email}).then((user) => {
                if(!user){
                    const NewUser = new User ({
                        Name : req.body.Name,
                        FirstName : req.body.FirstName,
                        Email : req.body.Email,
                        Password : req.body.Password
                    })
                    NewUser.save((err, user) => {
                        if(err){
                            console.log(err)
                            res.sendStatus(500)
                        }else{
                            res.send('Utilisateur créé')
                        }
                    });

                }else{
                    res.send('noooo')
                }
            })

        }else{
            res.send('Champ obligatoire')
        }

    },

    login(req,res) {
        User.findOne({Email: req.body.Email}).then(async(user) => {
            if(!user){
                res.sendStatus(401)
            }else {
                await bcrypt.compare(req.body.Password, user.Password, (err, result) => {
                    if(err){
                        res.sendStatus(500)
                    }else{
                        if(!result){
                            res.sendStatus(401)
                        }else{
                            Answer.find({}).then(result=>{
                                 res.render('back',{responses:result})
                            })


                        }

                    }
                })

            }
        })
    },

    update(req,res) {
        User.findOne({Email: req.body.Email}).then(async(user) => {
            if (req.body.Password != null && req.body.NewPassword != null && req.body.NewPassword !="" && req.body.Password != req.body.NewPassword ){
            await bcrypt.compare(req.body.Password, user.Password, (err, match) => {
                if (err) {
                    console.log(err)
                } else {
                    user.updateOne({ Password: req.body.NewPassword }).then().catch(error => {
                        console.log(error)
                            })
                        }
                    })
                }
                    if (req.body.Email != null && req.body.NewEmail != null && req.body.Email != req.body.NewEmail && req.body.NewEmail != ""){
                        await bcrypt.compare(req.body.Password, user.Password, (err, match) => {
                            if (err) {
                                console.log(err)
                            } else {
                                user.updateOne({ Email: req.body.NewMail }).then().catch(error => {
                                    console.log(error)
                                })
                    }

            })
        }
            if(req.body.Name != null && req.body.NewName != null && req.body.Name != req.body.NewName && req.body.NewName != ""){
                user.updateOne({ Name: req.body.NewName }).then().catch(error => {
                    console.log(error)
                })
            }
            if(req.body.FirstName != null && req.body.NewFirstName != null && req.body.FirstName != req.body.NewFirstName && req.body.NewFirstName != ""){
                user.updateOne({ FirstName: req.body.NewFirstName }).then().catch(error => {
                    console.log(error)
                })
            }
        })
    },

        delete(req, res) {
            User.findOne({Email: req.body.Email}).then(async(user) => {
                    await bcrypt.compare(req.body.Password, user.Password, (err, match) => {
                        if (err) {
                            console.log(err)
                        } else {
                            user.remove().then().catch(error => {
                                console.log(error)
                            })
                }
            })
        })
    },
    golog(req, res) {
        res.render("login")
    },

    sendFormAdmin(req, res){

        let transporter = nodemailer.createTransport({


            host:'smtp.gmail.com',
            port:587,
            ignoreTLS:false,
            secure: false,
            auth: {
                type:'OAuth2',
                user:process.env.EXPEDITEUR,
                clientId:"503989205539-0bgeg1fus78l1lt5ju6feges7p94bq4h.apps.googleusercontent.com",
                clientSecret:"8iXPxORnvOcQ3t85DjJNJ9tU",
                refreshToken: "1//04rLfUoHnIQZQCgYIARAAGAQSNwF-L9Ir9yYDBDmrylo9a_Qt2MpU8sNEHG30Zp6RS2GlFFcPGC_Kw2shoCYcxjgnmQv8GVLWOaY",
                accessToken:'ya29.a0AfH6SMBJopXTX4YFjyds4-YN4VJvvAnCJeUX_Ow--Z0sVBxTITdpyv6mkTXeerrfU-JD18RtiIXOCzNON6R-TXgopPqgs9E6a-l60zCwZZktHMk8rcPmt72FD7vrNq-kaUTG5FudZCEVNiAzlzM0-8BsuobSnCSb34SIwOsFrvQ',
                expire:3599

              }
          });

          let mailOptions= {
            from:'no-reply@face-calaisis.org',
            to:req.body.Email,
            subject:"Formulaire Diagnostic Mobilité",
            // text:"Bonjour, Veuillez trouver si joint le lien afin d'accéder au diagnostique mobilité. http://diagnostic-mobilite-face.fr ATTENTION ce lien est strictement personnel. Ce courriel vous est envoyé automatiquement, merci de ne pas utiliser la fonction répondre à l'expéditeur",
            html:"<h1>Diagnostic mobilité</h1><p>Bonjour, Veuillez trouver ci joint le lien afin d'accéder au diagnostic mobilité.<br/><br/><span> http://diagnostic-mobilite-face.fr </span> <br/><br/><br/>ATTENTION ce lien est strictement personnel, toute personne remplissant le formulaire sans y avoir été invité verra sa réponse ignorée.<br/> Ce courriel vous est envoyé automatiquement, merci de ne pas utiliser la fonction répondre à l'expéditeur</p>"
          };

          transporter.sendMail(mailOptions, (err, info)=>{
              if(err){
                  console.log(err)
                  res.send (err);
              }else {
                  res.send(200)
              }
          })
    },
    forgotPass(req,res){
        User.findOne({Email:req.body.Email}).then(user=>{

            if(user != null){
                let transporter = nodemailer.createTransport({
                    host:'smtp.gmail.com',
                    port:587,
                    ignoreTLS:false,
                    secure: false,
                    auth: {
                        type:'OAuth2',
                        user:process.env.EXPEDITEUR,
                        clientId:"503989205539-0bgeg1fus78l1lt5ju6feges7p94bq4h.apps.googleusercontent.com",
                        clientSecret:"8iXPxORnvOcQ3t85DjJNJ9tU",
                        refreshToken: "1//04rLfUoHnIQZQCgYIARAAGAQSNwF-L9Ir9yYDBDmrylo9a_Qt2MpU8sNEHG30Zp6RS2GlFFcPGC_Kw2shoCYcxjgnmQv8GVLWOaY",
                        accessToken:'ya29.a0AfH6SMBJopXTX4YFjyds4-YN4VJvvAnCJeUX_Ow--Z0sVBxTITdpyv6mkTXeerrfU-JD18RtiIXOCzNON6R-TXgopPqgs9E6a-l60zCwZZktHMk8rcPmt72FD7vrNq-kaUTG5FudZCEVNiAzlzM0-8BsuobSnCSb34SIwOsFrvQ',
                        expire:3599

                      }
                  });

                  let mailOptions= {
                    from:'no-reply@face-calaisis.org',
                    to:req.body.Email,
                    subject:"Réinitialisation de mot de passe",
                    // text:`Bonjour, Veuillez trouver si joint le lien afin de vous constituer un nouveau mot de passe: http://diagnostic-mobilite-face.fr/user/forgot/${user._id}`
                    html:`Bonjour, <br/>Veuillez trouver ci joint le lien afin de vous constituer un nouveau mot de passe: http://diagnostic-mobilite-face.fr/user/forgot/${user._id}`
                  };

                  transporter.sendMail(mailOptions, (err, info)=>{
                      if(err){
                          console.log(err)
                          res.send (err);
                      }else {
                          res.send(200)
                      }
                  })

            }else{
                res.sendStatus(401)
            }
        })
    },
    forgot(req,res){
        res.render('forgot',{id:req.params.id})
    },
    updatePass(req,res){
        User.findById(req.params.id).then(user=>{
            if(req.body.NewPass != req.body.NewPassConfirm){
                res.sendStatus(400)
            }else{
                user.Password = req.body.NewPass;
                user.save((err,user)=>{
                    if(err){
                        console.log(err)
                        res.sendStatus(500)
                    }else{
                        res.redirect('/user/login')
                    }
                })
            }
        })
    }

}
