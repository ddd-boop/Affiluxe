export default async function handler(req, res) {
  if (req.method==='POST'){
    const { name, email, message}= req.body;
    console.log('Form Data:',{name, email, message});
    return res.status(200).json({message: 'form submitted successfully!'});
  } else{
    return res.status(405).json({message:'method not allowed'});
  }
}
