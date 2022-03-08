export default function handler(req, res) {
    if(req.method == "DELETE"){
    res.status(200).json({ name: 'John Doe' })
    }
    res.end()
     
  }