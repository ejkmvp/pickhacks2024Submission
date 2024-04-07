import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

//this is test button - use for future default buttons

export const AppButton = () => {
  return (
    <div>
      <Button
        variant="text"
        //href="https://google.com"
        href=""
        endIcon={<SendIcon></SendIcon>}
        onClick={() => alert("Clicked")}
      >
        CLICK ME
      </Button>
    </div>
  );
};

export default AppButton;
