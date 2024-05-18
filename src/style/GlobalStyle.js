import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {
  --nav_back_color: #A5ACB6;
  --primary_text_color: #f0f0f1;
  --secondary_text_color:#959595;
  --notify: #242424;
  --hover_color: #c2c2c2;
  --tertiary_color: #eeef;
  --activeTab_color: #b1a176;
  --background_color: linear-gradient(135deg, #000 ,#111);
}  


html {
    font-size: 62.5%;
  }

body {
    font-family: 'Inter',sans-serif;
    box-sizing: border-box;
    line-height: 1.2;
}

::-webkit-scrollbar {
  width: 8px;
  @media (max-width: 600px) {
    width: 0;
  }
}
::-webkit-scrollbar-thumb {
  background-color: #252525;
  border-radius: 1rem;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #444;
  border-radius: 1rem;
}
::-webkit-scrollbar-track {
  background-color:transparent;
}

*,*::after,*::before,*:focus {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    outline: none;
}

.navLinks {
  font-size: 1.7rem;
  text-decoration: none;
  transition: all 0.3s;
  border-radius: 1.5rem;
  cursor: pointer;
  color: var(--primary_text_color);
   &:hover {
     color: var(--hover_color);
   }
}

.active {
  color: var(--hover_color);
}

.activeTab {
  color: var(--activeTab_color);
}
.inactiveTab {
  color: var(--primary_text_color);
}

.visible {
  transform: translateX(0);
  @media (max-width:600px) {
    left: 50%;
    transform: translate(-50%, 0);
  }
}
.hide {
  transform: translateX(200%);
  @media (max-width:600px) {
    left: 50%;
    transform: translate(-50%,-400%);
  }
}
.roll::before {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 0%;
  background-color: #f0f0f1;
  height: 3px;
}

@media (max-width: 800px) {
    html {
      font-size: 61.5%;
    }
  }
@media (max-width: 530px) {
    html {
      font-size: 60%;
    }
  }

`;

export default GlobalStyle;
