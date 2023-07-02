import "./chatbox.css";
export default function Chatbox({message})
{
    return(
        <div className="chatbox">
            {message}
        </div>
    );
}