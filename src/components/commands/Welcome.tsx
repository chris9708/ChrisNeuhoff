import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
        {`
 ________  ___  ___  ________  ___  ________           ________   _______   ___  ___  ___  ___  ________  ________ ________ 
|\\   ____\\|\\  \\|\\  \\|\\   __  \\|\\  \\|\\   ____\\         |\\   ___  \\|\\  ___ \\ |\\  \\|\\  \\|\\  \\|\\  \\|\\   __  \\|\\  _____\\\\  _____\\
\\ \\  \\___|\\ \\  \\\\\\  \\ \\  \\|\\  \\ \\  \\ \\  \\___|_        \\ \\  \\\\ \\  \\ \\   __/|\\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\  \\|\\  \\ \\  \\__/\\ \\  \\__/ 
 \\ \\  \\    \\ \\   __  \\ \\   _  _\\ \\  \\ \\_____  \\        \\ \\  \\\\ \\  \\ \\  \\_|/_\\ \\  \\\\\\  \\ \\   __  \\ \\  \\\\\\  \\ \\   __\\\\ \\   __\\
  \\ \\  \\____\\ \\  \\ \\  \\ \\  \\\\  \\\\ \\  \\|____|\\  \\        \\ \\  \\\\ \\  \\ \\  \\_|\\ \\ \\  \\\\\\  \\ \\  \\ \\  \\ \\  \\\\\\  \\ \\  \\_| \\ \\  \\_|
   \\ \\_______\\ \\__\\ \\__\\ \\__\\\\ _\\\\ \\__\\____\\_\\  \\        \\ \\__\\\\ \\__\\ \\_______\\ \\_______\\ \\__\\ \\__\\ \\_______\\ \\__\\   \\ \\__\\ 
    \\|_______|\\|__|\\|__|\\|__|\\|__|\\|__|\\_________\\        \\|__| \\|__|\\|_______|\\|_______|\\|__|\\|__|\\|_______|\\|__|    \\|__| 
                                      \\|_________|                                                                          
                                                                                                                            
         `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    ____     __          
   / __/__ _/ /_         
  _\\ \\/ _ \`/ __/         
 /___/\\_,_/\\__/          
    _  __     _          
   / |/ /__ _(_)__  ___ _
  /    / _ \`/ / _ \\/ _ \`/
 /_/|_/\\_,_/_/_//_/\\_, / 
                  /___/  
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
