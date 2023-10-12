import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import toast from "react-hot-toast";
import PImg from "./image/profileimg.jpg";
import "./AboutMe.css";

function AboutMe() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 4 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  async function handleSave() {
    const email = "romerof0005@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      toast.success("copied email");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  return (
    <div className="aboutMeContainer">
      <div className="mainTitle">
        <motion.div>
          <motion.svg
            width="226"
            height="130"
            viewBox="0 0 226 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
            variants={draw}
          >
            <motion.path
              d="M2.04346 104.539C9.43112 104.539 13.2415 95.8264 18.871 92.3861C25.6218 88.2606 30.8818 79.0665 36.54 73.4083C45.2459 64.7024 54.2622 49.3092 59.2572 38.0704C62.2237 31.3959 68.0591 26.2594 71.0365 19.5601C72.6718 15.8808 79.7578 6.13439 74.0281 13.2965C64.8902 24.7189 58.0391 37.7298 51.2174 50.6911C46.3543 59.931 31.6335 79.0946 34.1093 90.2359C35.7754 97.7331 47.4666 96.9471 52.5262 94.8168C60.8426 91.3151 65.8644 86.3399 71.9714 80.2329C79.6222 72.5821 71.5896 74.4883 65.9883 77.9892C62.1029 80.4175 58.1512 93.1498 61.8748 96.8735C74.7022 109.701 98.9878 76.4011 106.374 69.0145C116.057 59.3315 119.975 42.5028 130.774 33.8635C132.582 32.4176 127.639 36.846 126.568 37.9769C119.055 45.9073 115.012 56.9617 108.057 65.462C102.409 72.3649 92.9124 81.9389 92.9124 91.9187C92.9124 102.867 110.26 91.5076 113.105 89.7685C116.142 87.9128 120.049 84.6743 122.267 81.8221C124.687 78.7106 124.223 76.321 121.893 80.9807C118.77 87.2279 110.337 96.1256 122.361 96.1256C132.92 96.1256 138.087 79.0084 146.387 80.0459C147.014 80.1243 145.139 83.3145 144.984 83.5984C142.892 87.4336 141.177 91.5057 139.001 95.2842C134.421 103.239 128.042 111.479 121.519 118.001C119.356 120.165 102.87 134.333 104.785 123.798C106.931 111.996 121.976 113.192 129.933 109.214C143.705 102.328 156.154 103.837 166.019 89.488C167.288 87.6424 174.363 78.0845 168.263 77.6152C162.108 77.1418 154.157 77.5954 150.126 83.0375C147.557 86.5052 140.405 93.652 141.806 98.5562C143.373 104.041 157.141 99.9418 160.223 98.7432C172.51 93.9648 208.744 80.9807 195.561 80.9807C188.699 80.9807 185.16 89.5115 181.07 93.6014C173.258 101.414 178.88 103.767 188.923 102.763C196.331 102.022 224.167 95.2527 224.167 86.029"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              variants={draw}
            />
            <motion.path
              d="M13.8228 22.0842C60.9001 17.5283 107.796 1.89111 155.174 1.89111"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              variants={draw}
            />
            <motion.path
              d="M8.77441 60.7876C10.9534 63.5113 45.3378 56.8575 50.4694 56.4872C64.6581 55.4633 78.7789 53.7871 92.9123 52.3738"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              variants={draw}
            />
          </motion.svg>
        </motion.div>
        <motion.div>
          <motion.svg
            width="341"
            height="133"
            viewBox="0 0 341 133"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
            variants={draw}
          >
            <motion.path
              d="M37.9398 18.3118C37.9398 39.3378 33.6873 58.4899 26.1605 78.1432C19.7035 95.0031 -5.72991 142.713 4.28469 127.691"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              variants={draw}
            />
            <motion.path
              d="M17.7469 16.6289C-1.0055 14.5453 56.2914 -5.03049 72.904 3.91474C86.3305 11.1444 79.6317 29.577 72.53 38.5048C64.1126 49.0867 51.9486 55.3899 41.3055 63.3722C37.7384 66.0475 32.1462 67.9589 39.9967 66.7377C49.9732 65.1858 57.7004 71.4968 58.1331 81.8825C58.6567 94.4496 53.0848 131.855 53.0848 119.277"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              variants={draw}
            />
            <motion.path
              d="M98.5192 78.8909C96.3929 81.2298 70.9767 108.986 94.7798 113.855C110.551 117.081 114.486 94.8658 117.871 84.0327C120.138 76.7767 108.865 79.4118 105.998 83.0978C100.369 90.3349 107.414 94.1388 114.973 91.979C123.062 89.6678 129.6 86.5137 135.54 80.5737C142.067 74.0468 131.224 86.8627 129.744 90.6702C127.422 96.6409 120.81 109.181 131.333 109.181C144.735 109.181 162.687 67.1265 159.005 80.0127C156.439 88.9925 150.53 94.7667 146.01 102.45C145.14 103.93 138.542 113.246 140.962 107.498C144.144 99.9409 149.223 94.2973 153.209 87.2112C155.057 83.9251 156.714 81.0728 159.846 78.9844C161.29 78.0223 159.612 82.8556 158.257 83.9392C151.298 89.5064 161.514 79.0372 164.147 78.8909C173.718 78.3592 167.342 90.5523 164.147 95.3445C161.185 99.7875 160.453 97.9322 163.305 94.1292C166.207 90.2601 169.959 86.5409 173.402 83.0978C178.184 78.3158 184.716 80.1581 184.34 87.3047C183.985 94.0508 178.215 101.022 175.085 106.656C169.855 116.069 184.833 106.642 187.799 104.974C194.776 101.049 208.833 90.8109 208.833 81.6955C208.833 81.0434 197.208 91.967 195.745 94.7836C192.276 101.465 191.863 108.922 201.167 109.181C214.306 109.546 223.171 97.7217 228.092 86.6503C232.265 77.2605 229.232 89.1941 229.868 91.4181C232.168 99.4685 247.524 80.5417 248.659 79.2648C249.554 78.2574 246.337 82.2364 245.667 83.0978C243.365 86.0572 241.697 91.9015 239.03 94.0357C234.172 97.9217 248.826 100.048 251.65 98.71C257.737 95.8269 267.358 86.5132 269.787 80.1997C275.358 65.7147 259.692 90.2211 260.344 95.438C261.042 101.02 292.256 83.1706 288.484 74.684C284.396 65.4868 270.218 82.8828 278.2 85.248C285.979 87.5529 303.37 77.1435 309.238 73.4687C322.012 65.469 329.017 53.6891 339.154 43.553"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              variants={draw}
            />
          </motion.svg>
        </motion.div>
      </div>
      <div>
        <div className="pic__info__grid">
          <div className="pic__info_flow">
            <div className="image__container">
              <img className="aboutme__pic" src={PImg} alt="me!!!" />
            </div>
          </div>
          <div className="pic__info_flow">
            <div className="info__container">
              <h3 className="sub__title">About Me</h3>
              <p>
                Hello, I'm a seasoned software engineer with expertise in both
                front-end and back-end web development. In the realm of
                front-end development, I have extensive experience working with
                technologies such as React Native, Next.js, and Ruby. On the
                back-end, I am well-versed in Node.js, Ruby on Rails, and
                proficient with databases including MySQL, Prisma, and MongoDB.
                My diverse skill set and hands-on experience make me a
                knowledgeable and versatile professional in the field of web
                development.
              </p>
              <div className="icons">
                <a
                  href="https://github.com/Ferom72?tab=repositories"
                  target="_blank"
                  className="anchorLinks"
                >
                  <AiFillGithub className="gitHubLink" size={30} />
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/felipe-romero-b31a31192/"
                  target="_blank"
                  className="anchorLinks"
                >
                  <AiFillLinkedin className="linkedInLink" size={30} />
                </a>{" "}
                <SiGmail
                  size={25}
                  className="gmailLink"
                  onClick={() => handleSave()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
