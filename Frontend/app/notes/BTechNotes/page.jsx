"use client";

import { useState } from "react";

const NotesFetcher = () => {
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [notesLink, setNotesLink] = useState("");
  const [youtubeLink, setYoutubeLink] =  useState('');
  const [showYoutubeIframe, setShowYoutubeIframe] = useState(false)
  const [titleName, setTitleName] = useState('Notes')

  const branches = [
    "CSE",
    "CST",
    "CS",
    "CSE_DS", // sem 6 se different hai
    "CSE_AI", // sem 6 se different hai
    "IT",
    "ITE",
    "AIDS",
    "AIML",
    "EE",
    "ECE",
    "EEE",
    "MAE",
    "ME",
    "CE",
    "ICE",
    "Chemical Engineering",
    "IIT",
    "Energy Engineering",
    "Automation and Robotics",
  ];
  const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  const subjects = {
    CSE: {
      1: {
        "Applied Chemistry": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      },
      3: {
        "Computational Methods": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=im2NGAf_mv8yd3cF&amp;list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&rel=0'
        },
        "Data Stuructures": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1keYobeUkV58zcCGAFdk3TWiaesc4eo19&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        "Digital Logics and Computer Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=wSfbx3YO3f_YiVeC&amp;list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK&rel=0'
        },
        "Discrete Matthematics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jV_jTBQIOY7ytlwS3z_AdlmeqA8nfjpD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        },
        "Indian knowledge System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gNo4MMY0vWgwGKw9&amp;list=PL9MeEziOdUu7B41H23_Dl2tJjP25adLq1&rel=0'
        },
        "Object Oriented Programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y2HrMCAS7z7Y5Jslj2htSyeXmuEKI9NK&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=rc0-IDmCjUtFOscH&amp;list=PLz8TdOA7NTzSe5HdXz_nAk9kmOJLDi5ZB&rel=0'
        }
      },
      4: {
        "Circuit and Systems": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QSq2NRYXB7m8ixUmpi9vUGsjQckl4WxX&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Gejj_pBsGH-bVxV9&amp;list=PLSMKKUFl3GMCNkTqZf9vLQbOUOLgX6EdY&rel=0'
        },
        "Database Management System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ae5qyVnNNfj8xwK6jjtL36tIaOEY3Caj&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Probability Stats and linear programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WbHibtxnoGs5BnV8&amp;list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V&rel=0'
        },
        "Programming in Java": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1uiJXmyaEwyLrZJVqzEBBG2tXK7m5N3fQ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=cTOH8sIXsYIHyfDj&amp;list=PL5Rc9H5eTGY5MJYZix569VHzzV1raWWsd&rel=0'
        },
        "Technical Writing": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0'
        },
        "Theory of Computation": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tsdWI3KNOrF71KNbtCWhOTGwXWneFczu&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=tI9zYQYjKx5NohHL&amp;list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&rel=0'
        }
      },
      5: {
        "Compiler Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19QreW3bV3xNiPC14NVk4dJr5JpEPHH59&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=6Z1AelqpjSBI3iBE&amp;list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc&rel=0'
        },
        "Computer Networks": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1L8hCo9iZt2mBFV-XiHnDgFtW3ii0G4IB&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EhNGoD-RyxT1cXcA&amp;list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&rel=0'
        },
        "Design and Analysis of Algorithm": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nrq4Y4xoBP1unBuZXBKoqVaigQVKFkgo&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=m2nb5DbJyN1ScNHb&amp;list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&rel=0'
        },
        "Economics for Engineer": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CJLF1OuTlBWgUVcn&amp;list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&rel=0'
        },
        "Operating System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YEa7fbbX5jqmxZYnS3jlwB9CiaB6HSp-&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Vj-507j3UMnr4UOp&amp;list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&rel=0'
        },
        "Software Engineering": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zVmbnt2NJiPITxAkI5b2dW89djpWccLt&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=5xK8UXjtys5XKe5-&amp;list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&rel=0'
        }
      },
      6: {
        "Advanced Computer Networks ": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nknCFJUGAZhLgskbgRLjJ92purekylYd&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=BWDIHj6Hzt5cJMDM&amp;list=PL_ACaauDUVgTUy8fbBt1MnXR-8Feglflz&rel=0'
        },
        "Advanced Java Programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1AbveJXH8tjr82WVjzLxegpUc7W73QzzI&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=mVYG8XUYgAstY9ox&amp;list=PLdBwVRHjcI__HBqxd51g3j3GJSRaocWZ7&rel=0'
        },
        "Artificial Intelligence": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1sMbS5z0yKTjbyIjyUqu4bM2hF19bNdn7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=zTklJPJX_5lXi7XX&amp;list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&rel=0'
        },
        "Software Project Management": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wMBT9QtsjRYsgGF2bc99icWxE-bHzV99&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=SOW3AamDox5NZqVT&amp;list=PLh11ucJN276KHr_DR1Ok-EWYfSwtaQXND&rel=0'
        },
        "Web Technologies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1f9Jk36XIcFAhPii17QS2je7r3IXy8q9G&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=4shALtyBalUia6HT&amp;list=PLUwI7zx-CMG1_kNkWrryGnXRdw59_hgBO&rel=0'
        },
        "Wireless Communication and Networks": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qejHdencAoQmCKISAfTpVy4O-UQ-Yqf1&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=4QEEjBUecnJ8-ErU&amp;list=PLzUKfMcBC0HTp9qvTR_cEbYNhYzNes7BG&rel=0'
        }
      },
      7: {
        "Data Structures":{
          driveUrl:"https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics":{
          driveUrl:"https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      },
      8: {
        "Data Structures":{
          driveUrl:"https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics":{
          driveUrl:"https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      }
    },
    CST: {
      1: {
        "Applied Chemistry": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        },
      },
      3: {
        "Computational Methods": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=im2NGAf_mv8yd3cF&amp;list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&rel=0'
        },
        "Data Stuructures": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1keYobeUkV58zcCGAFdk3TWiaesc4eo19&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        "Digital Logics and Computer Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=wSfbx3YO3f_YiVeC&amp;list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK&rel=0'
        },
        "Discrete Matthematics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jV_jTBQIOY7ytlwS3z_AdlmeqA8nfjpD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        },
        "Indian knowledge System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gNo4MMY0vWgwGKw9&amp;list=PL9MeEziOdUu7B41H23_Dl2tJjP25adLq1&rel=0'
        },
        "Object Oriented Programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y2HrMCAS7z7Y5Jslj2htSyeXmuEKI9NK&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=rc0-IDmCjUtFOscH&amp;list=PLz8TdOA7NTzSe5HdXz_nAk9kmOJLDi5ZB&rel=0'
        },
      },
      4: {
        "Circuit and Systems": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QSq2NRYXB7m8ixUmpi9vUGsjQckl4WxX&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Gejj_pBsGH-bVxV9&amp;list=PLSMKKUFl3GMCNkTqZf9vLQbOUOLgX6EdY&rel=0'
        },
        "Database Management System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ae5qyVnNNfj8xwK6jjtL36tIaOEY3Caj&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Probability Stats and linear programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WbHibtxnoGs5BnV8&amp;list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V&rel=0'
        },
        "Programming in Java": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1uiJXmyaEwyLrZJVqzEBBG2tXK7m5N3fQ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=cTOH8sIXsYIHyfDj&amp;list=PL5Rc9H5eTGY5MJYZix569VHzzV1raWWsd&rel=0'
        },
        "Technical Writing": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0'
        },
        "Theory of Computation": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tsdWI3KNOrF71KNbtCWhOTGwXWneFczu&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=tI9zYQYjKx5NohHL&amp;list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&rel=0'
        }
      },
      5: {
        "Compiler Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19QreW3bV3xNiPC14NVk4dJr5JpEPHH59&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=6Z1AelqpjSBI3iBE&amp;list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc&rel=0'
        },
        "Computer Networks": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1L8hCo9iZt2mBFV-XiHnDgFtW3ii0G4IB&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EhNGoD-RyxT1cXcA&amp;list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&rel=0'
        },
        "Design and Analysis of Algorithm": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nrq4Y4xoBP1unBuZXBKoqVaigQVKFkgo&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=m2nb5DbJyN1ScNHb&amp;list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&rel=0'
        },
        "Economics for Engineer": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CJLF1OuTlBWgUVcn&amp;list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&rel=0'
        },
        "Operating System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YEa7fbbX5jqmxZYnS3jlwB9CiaB6HSp-&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Vj-507j3UMnr4UOp&amp;list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&rel=0'
        },
        "Software Engineering": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zVmbnt2NJiPITxAkI5b2dW89djpWccLt&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=5xK8UXjtys5XKe5-&amp;list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&rel=0'
        },
      },
      6: {
        "Advanced Computer Networks ": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nknCFJUGAZhLgskbgRLjJ92purekylYd&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=BWDIHj6Hzt5cJMDM&amp;list=PL_ACaauDUVgTUy8fbBt1MnXR-8Feglflz&rel=0'
        },
        "Advanced Java Programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1AbveJXH8tjr82WVjzLxegpUc7W73QzzI&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=mVYG8XUYgAstY9ox&amp;list=PLdBwVRHjcI__HBqxd51g3j3GJSRaocWZ7&rel=0'
        },
        "Artificial Intelligence": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1sMbS5z0yKTjbyIjyUqu4bM2hF19bNdn7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=zTklJPJX_5lXi7XX&amp;list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&rel=0'
        },
        "Software Project Management": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wMBT9QtsjRYsgGF2bc99icWxE-bHzV99&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=SOW3AamDox5NZqVT&amp;list=PLh11ucJN276KHr_DR1Ok-EWYfSwtaQXND&rel=0'
        },
        "Web Technologies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1f9Jk36XIcFAhPii17QS2je7r3IXy8q9G&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=4shALtyBalUia6HT&amp;list=PLUwI7zx-CMG1_kNkWrryGnXRdw59_hgBO&rel=0'
        },
        "Wireless Communication and Networks": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qejHdencAoQmCKISAfTpVy4O-UQ-Yqf1&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=4QEEjBUecnJ8-ErU&amp;list=PLzUKfMcBC0HTp9qvTR_cEbYNhYzNes7BG&rel=0'
        },
      },
      7: {
        "Data Structures":{
          driveUrl:"https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics":{
          driveUrl:"https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      },
      8: {
        "Data Structures":{
          driveUrl:"https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics":{
          driveUrl:"https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      }
    },
    CS: {
      1: {
        "Applied Chemistry": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      },
      3: {
        "Computational Methods": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=im2NGAf_mv8yd3cF&amp;list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&rel=0'
        },
        "Data Stuructures": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1keYobeUkV58zcCGAFdk3TWiaesc4eo19&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        "Digital Logics and Computer Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=wSfbx3YO3f_YiVeC&amp;list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK&rel=0'
        },
        "Discrete Matthematics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jV_jTBQIOY7ytlwS3z_AdlmeqA8nfjpD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        },
        "Indian knowledge System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gNo4MMY0vWgwGKw9&amp;list=PL9MeEziOdUu7B41H23_Dl2tJjP25adLq1&rel=0'
        },
        "Object Oriented Programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y2HrMCAS7z7Y5Jslj2htSyeXmuEKI9NK&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=rc0-IDmCjUtFOscH&amp;list=PLz8TdOA7NTzSe5HdXz_nAk9kmOJLDi5ZB&rel=0'
        }
      },
      4: {
        "Circuit and Systems": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QSq2NRYXB7m8ixUmpi9vUGsjQckl4WxX&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Gejj_pBsGH-bVxV9&amp;list=PLSMKKUFl3GMCNkTqZf9vLQbOUOLgX6EdY&rel=0'
        },
        "Database Management System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ae5qyVnNNfj8xwK6jjtL36tIaOEY3Caj&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Probability Stats and linear programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WbHibtxnoGs5BnV8&amp;list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V&rel=0'
        },
        "Programming in Java": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1uiJXmyaEwyLrZJVqzEBBG2tXK7m5N3fQ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=cTOH8sIXsYIHyfDj&amp;list=PL5Rc9H5eTGY5MJYZix569VHzzV1raWWsd&rel=0'
        },
        "Technical Writing": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0'
        },
        "Theory of Computation": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tsdWI3KNOrF71KNbtCWhOTGwXWneFczu&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=tI9zYQYjKx5NohHL&amp;list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&rel=0'
        }
      },
      5: {
        "Compiler Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19QreW3bV3xNiPC14NVk4dJr5JpEPHH59&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=6Z1AelqpjSBI3iBE&amp;list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc&rel=0'
        },
        "Computer Networks": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1L8hCo9iZt2mBFV-XiHnDgFtW3ii0G4IB&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EhNGoD-RyxT1cXcA&amp;list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&rel=0'
        },
        "Design and Analysis of Algorithm": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nrq4Y4xoBP1unBuZXBKoqVaigQVKFkgo&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=m2nb5DbJyN1ScNHb&amp;list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&rel=0'
        },
        "Economics for Engineer": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CJLF1OuTlBWgUVcn&amp;list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&rel=0'
        },
        "Operating System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YEa7fbbX5jqmxZYnS3jlwB9CiaB6HSp-&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Vj-507j3UMnr4UOp&amp;list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&rel=0'
        },
        "Software Engineering": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zVmbnt2NJiPITxAkI5b2dW89djpWccLt&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=5xK8UXjtys5XKe5-&amp;list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&rel=0'
        }
      },
      6: {
        "Advanced Computer Networks ": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nknCFJUGAZhLgskbgRLjJ92purekylYd&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=BWDIHj6Hzt5cJMDM&amp;list=PL_ACaauDUVgTUy8fbBt1MnXR-8Feglflz&rel=0'
        },
        "Advanced Java Programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1AbveJXH8tjr82WVjzLxegpUc7W73QzzI&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=mVYG8XUYgAstY9ox&amp;list=PLdBwVRHjcI__HBqxd51g3j3GJSRaocWZ7&rel=0'
        },
        "Artificial Intelligence": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1sMbS5z0yKTjbyIjyUqu4bM2hF19bNdn7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=zTklJPJX_5lXi7XX&amp;list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&rel=0'
        },
        "Software Project Management": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wMBT9QtsjRYsgGF2bc99icWxE-bHzV99&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=SOW3AamDox5NZqVT&amp;list=PLh11ucJN276KHr_DR1Ok-EWYfSwtaQXND&rel=0'
        },
        "Web Technologies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1f9Jk36XIcFAhPii17QS2je7r3IXy8q9G&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=4shALtyBalUia6HT&amp;list=PLUwI7zx-CMG1_kNkWrryGnXRdw59_hgBO&rel=0'
        },
        "Wireless Communication and Networks": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qejHdencAoQmCKISAfTpVy4O-UQ-Yqf1&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=4QEEjBUecnJ8-ErU&amp;list=PLzUKfMcBC0HTp9qvTR_cEbYNhYzNes7BG&rel=0'
        }
      }
    },
    CSE_DS: {
      1: {
        "Applied Chemistry": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      },
      3: {
        "Computational Methods": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=im2NGAf_mv8yd3cF&amp;list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&rel=0'
        },
        "Data Stuructures": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1keYobeUkV58zcCGAFdk3TWiaesc4eo19&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        "Digital Logics and Computer Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=wSfbx3YO3f_YiVeC&amp;list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK&rel=0'
        },
        "Discrete Matthematics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jV_jTBQIOY7ytlwS3z_AdlmeqA8nfjpD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        },
        "Indian knowledge System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gNo4MMY0vWgwGKw9&amp;list=PL9MeEziOdUu7B41H23_Dl2tJjP25adLq1&rel=0'
        },
        "Object Oriented Programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y2HrMCAS7z7Y5Jslj2htSyeXmuEKI9NK&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=rc0-IDmCjUtFOscH&amp;list=PLz8TdOA7NTzSe5HdXz_nAk9kmOJLDi5ZB&rel=0'
        }
      },
      4: {
        "Circuit and Systems": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QSq2NRYXB7m8ixUmpi9vUGsjQckl4WxX&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Gejj_pBsGH-bVxV9&amp;list=PLSMKKUFl3GMCNkTqZf9vLQbOUOLgX6EdY&rel=0'
        },
        "Database Management System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ae5qyVnNNfj8xwK6jjtL36tIaOEY3Caj&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Probability Stats and linear programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WbHibtxnoGs5BnV8&amp;list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V&rel=0'
        },
        "Programming in Java": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1uiJXmyaEwyLrZJVqzEBBG2tXK7m5N3fQ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=cTOH8sIXsYIHyfDj&amp;list=PL5Rc9H5eTGY5MJYZix569VHzzV1raWWsd&rel=0'
        },
        "Technical Writing": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0'
        },
        "Theory of Computation": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tsdWI3KNOrF71KNbtCWhOTGwXWneFczu&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=tI9zYQYjKx5NohHL&amp;list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&rel=0'
        }
      },
      5: {
        "Compiler Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19QreW3bV3xNiPC14NVk4dJr5JpEPHH59&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=6Z1AelqpjSBI3iBE&amp;list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc&rel=0'
        },
        "Computer Networks": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1L8hCo9iZt2mBFV-XiHnDgFtW3ii0G4IB&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EhNGoD-RyxT1cXcA&amp;list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&rel=0'
        },
        "Design and Analysis of Algorithm": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nrq4Y4xoBP1unBuZXBKoqVaigQVKFkgo&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=m2nb5DbJyN1ScNHb&amp;list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&rel=0'
        },
        "Economics for Engineer": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CJLF1OuTlBWgUVcn&amp;list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&rel=0'
        },
        "Operating System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YEa7fbbX5jqmxZYnS3jlwB9CiaB6HSp-&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Vj-507j3UMnr4UOp&amp;list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&rel=0'
        },
        "Software Engineering": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zVmbnt2NJiPITxAkI5b2dW89djpWccLt&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=5xK8UXjtys5XKe5-&amp;list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&rel=0'
        }
      },
      6: {
        "Principles of Management for Engineers ": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Ha9wFlNYtiNbsJUbmKgVTJIbB2nhwwjT&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=wJe9gBa7ttCyz3xZ&amp;list=PLzs7q4LSx_lTd42jaMK45vE2fWwhxcJzp&rel=0'
        },
        "Introduction to Universal Human Values": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1NfYTGucEkstUJApop0d1ynvpkZx3Lk_q&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=cle_dhOJ1mreNM1x&amp;list=PLim9gWjsjN-M7jKqp65fE0WnvoqCfGxgF&rel=0'
        },
        "Statistics, Statistical Modelling & Data Analytics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1t8y3_W4Z2y9VvevJbDpTd_SX_lB_4hNW&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=M1Y7iUvpGghF-KUu&amp;list=PLunlGNVWDAaY7AeDDzTeu4-DD3g7zmAXs&rel=0'
        },
        "Artificial Intelligence and Machine Learning ": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WsOnzHd2lA40agIF09diuT3Ia7gw5uNt&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=v3auOFzlSpalie7Q&amp;list=PLG9aCp4uE-s2HRvW-fSs2E4hk07xWTGYB'
        },
        "Programming in R and Python": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1CwPN6BzNiiKulg1aALVOCTL7J4NZzwPd&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ngd3pbXu3VhPXa6e&amp;list=PLjVLYmrlmjGdmPrz0Lx7smkd0qIKHInOF'
        },
        "Data Pre-processing and Post Processing": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=17JcS3EVZ4o2Y8Db1eCH9RSIuGDtMl9M8&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=UiJzicTns8ghDHFw&amp;list=PLTmQbi1PYZ_EnBmO1-E0Z81ArnE-zSR1a'
        }
      },
      7: {
        "Data Structures":{
          driveUrl:"https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics":{
          driveUrl:"https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      },
      8: {
        "Data Structures":{
          driveUrl:"https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics":{
          driveUrl:"https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      }
    },
    CSE_AI: {
      1: {
        "Applied Chemistry": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      },
      3: {
        "Computational Methods": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=im2NGAf_mv8yd3cF&amp;list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&rel=0'
        },
        "Data Stuructures": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1keYobeUkV58zcCGAFdk3TWiaesc4eo19&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        "Digital Logics and Computer Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=wSfbx3YO3f_YiVeC&amp;list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK&rel=0'
        },
        "Discrete Matthematics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jV_jTBQIOY7ytlwS3z_AdlmeqA8nfjpD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        },
        "Indian knowledge System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gNo4MMY0vWgwGKw9&amp;list=PL9MeEziOdUu7B41H23_Dl2tJjP25adLq1&rel=0'
        },
        "Object Oriented Programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y2HrMCAS7z7Y5Jslj2htSyeXmuEKI9NK&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=rc0-IDmCjUtFOscH&amp;list=PLz8TdOA7NTzSe5HdXz_nAk9kmOJLDi5ZB&rel=0'
        }
      },
      4: {
        "Circuit and Systems": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QSq2NRYXB7m8ixUmpi9vUGsjQckl4WxX&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Gejj_pBsGH-bVxV9&amp;list=PLSMKKUFl3GMCNkTqZf9vLQbOUOLgX6EdY&rel=0'
        },
        "Database Management System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ae5qyVnNNfj8xwK6jjtL36tIaOEY3Caj&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Probability Stats and linear programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WbHibtxnoGs5BnV8&amp;list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V&rel=0'
        },
        "Programming in Java": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1uiJXmyaEwyLrZJVqzEBBG2tXK7m5N3fQ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=cTOH8sIXsYIHyfDj&amp;list=PL5Rc9H5eTGY5MJYZix569VHzzV1raWWsd&rel=0'
        },
        "Technical Writing": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0'
        },
        "Theory of Computation": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tsdWI3KNOrF71KNbtCWhOTGwXWneFczu&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=tI9zYQYjKx5NohHL&amp;list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&rel=0'
        }
      },
      5: {
        "Compiler Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19QreW3bV3xNiPC14NVk4dJr5JpEPHH59&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=6Z1AelqpjSBI3iBE&amp;list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc&rel=0'
        },
        "Computer Networks": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1L8hCo9iZt2mBFV-XiHnDgFtW3ii0G4IB&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EhNGoD-RyxT1cXcA&amp;list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&rel=0'
        },
        "Design and Analysis of Algorithm": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nrq4Y4xoBP1unBuZXBKoqVaigQVKFkgo&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=m2nb5DbJyN1ScNHb&amp;list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&rel=0'
        },
        "Economics for Engineer": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CJLF1OuTlBWgUVcn&amp;list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&rel=0'
        },
        "Operating System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YEa7fbbX5jqmxZYnS3jlwB9CiaB6HSp-&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Vj-507j3UMnr4UOp&amp;list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&rel=0'
        },
        "Software Engineering": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zVmbnt2NJiPITxAkI5b2dW89djpWccLt&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=5xK8UXjtys5XKe5-&amp;list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&rel=0'
        }
      },
      6: {
        "Principles of Management for Engineers ": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Ha9wFlNYtiNbsJUbmKgVTJIbB2nhwwjT&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=wJe9gBa7ttCyz3xZ&amp;list=PLzs7q4LSx_lTd42jaMK45vE2fWwhxcJzp&rel=0'
        },
        "Introduction to Universal Human Values": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1NfYTGucEkstUJApop0d1ynvpkZx3Lk_q&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=cle_dhOJ1mreNM1x&amp;list=PLim9gWjsjN-M7jKqp65fE0WnvoqCfGxgF&rel=0'
        },
        "Statistics, Statistical Modelling & Data Analytics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1t8y3_W4Z2y9VvevJbDpTd_SX_lB_4hNW&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=M1Y7iUvpGghF-KUu&amp;list=PLunlGNVWDAaY7AeDDzTeu4-DD3g7zmAXs&rel=0'
        },
        "Artificial Intelligence ": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1vRTFQLNjDuC5faRuwbry42D7tunILDMD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=FEFTEe-G5JFvJGlr&amp;list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&rel=0'
        },
        "Fuzzy Systems and Applications": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1xnI22Hv28uoCFOC8rP2TtouDn0Ej717q&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=x1F01TWuJf2mkN8q&amp;list=PLYwpaL_SFmcCPUl8mAnb4g1oExKd0n4Gw&rel=0'
        },
        "Artificial Neural Networks": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1B--D5vkmKYeNR2LBoau95f8PGlK7tsIQ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=U35obVkobJid1LsB&amp;list=PLVsrfTSlZ_42TbmQUmidUJaiRF8D34zQL&rel=0'
        }
      },
      7: {
        "Data Structures":{
          driveUrl:"https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics":{
          driveUrl:"https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      },
      8: {
        "Data Structures":{
          driveUrl:"https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics":{
          driveUrl:"https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      }
    },
    IT: {
      1: {
        "Applied Chemistry": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      },
      3: {
        "Computational Methods": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=im2NGAf_mv8yd3cF&amp;list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&rel=0'
        },
        "Data Stuructures": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1keYobeUkV58zcCGAFdk3TWiaesc4eo19&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        "Digital Logics and Computer Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=wSfbx3YO3f_YiVeC&amp;list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK&rel=0'
        },
        "Discrete Matthematics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jV_jTBQIOY7ytlwS3z_AdlmeqA8nfjpD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        },
        "Indian knowledge System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gNo4MMY0vWgwGKw9&amp;list=PL9MeEziOdUu7B41H23_Dl2tJjP25adLq1&rel=0'
        },
        "Object Oriented Programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y2HrMCAS7z7Y5Jslj2htSyeXmuEKI9NK&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=rc0-IDmCjUtFOscH&amp;list=PLz8TdOA7NTzSe5HdXz_nAk9kmOJLDi5ZB&rel=0'
        }
      },
      4: {
        "Circuit and Systems": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QSq2NRYXB7m8ixUmpi9vUGsjQckl4WxX&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Gejj_pBsGH-bVxV9&amp;list=PLSMKKUFl3GMCNkTqZf9vLQbOUOLgX6EdY&rel=0'
        },
        "Database Management System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ae5qyVnNNfj8xwK6jjtL36tIaOEY3Caj&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Probability Stats and linear programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WbHibtxnoGs5BnV8&amp;list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V&rel=0'
        },
        "Programming in Java": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1uiJXmyaEwyLrZJVqzEBBG2tXK7m5N3fQ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=cTOH8sIXsYIHyfDj&amp;list=PL5Rc9H5eTGY5MJYZix569VHzzV1raWWsd&rel=0'
        },
        "Technical Writing": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0'
        },
        "Theory of Computation": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tsdWI3KNOrF71KNbtCWhOTGwXWneFczu&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=tI9zYQYjKx5NohHL&amp;list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&rel=0'
        }
      },
      5: {
        "Compiler Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19QreW3bV3xNiPC14NVk4dJr5JpEPHH59&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=6Z1AelqpjSBI3iBE&amp;list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc&rel=0'
        },
        "Computer Networks": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1L8hCo9iZt2mBFV-XiHnDgFtW3ii0G4IB&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EhNGoD-RyxT1cXcA&amp;list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&rel=0'
        },
        "Design and Analysis of Algorithm": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nrq4Y4xoBP1unBuZXBKoqVaigQVKFkgo&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=m2nb5DbJyN1ScNHb&amp;list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&rel=0'
        },
        "Economics for Engineer": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CJLF1OuTlBWgUVcn&amp;list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&rel=0'
        },
        "Operating System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YEa7fbbX5jqmxZYnS3jlwB9CiaB6HSp-&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Vj-507j3UMnr4UOp&amp;list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&rel=0'
        },
        "Software Engineering": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zVmbnt2NJiPITxAkI5b2dW89djpWccLt&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=5xK8UXjtys5XKe5-&amp;list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&rel=0'
        }
      },
      6: {
        "Advanced Computer Networks ": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nknCFJUGAZhLgskbgRLjJ92purekylYd&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=BWDIHj6Hzt5cJMDM&amp;list=PL_ACaauDUVgTUy8fbBt1MnXR-8Feglflz&rel=0'
        },
        "Advanced Java Programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1AbveJXH8tjr82WVjzLxegpUc7W73QzzI&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=mVYG8XUYgAstY9ox&amp;list=PLdBwVRHjcI__HBqxd51g3j3GJSRaocWZ7&rel=0'
        },
        "Artificial Intelligence": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1sMbS5z0yKTjbyIjyUqu4bM2hF19bNdn7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=zTklJPJX_5lXi7XX&amp;list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&rel=0'
        },
        "Software Project Management": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wMBT9QtsjRYsgGF2bc99icWxE-bHzV99&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=SOW3AamDox5NZqVT&amp;list=PLh11ucJN276KHr_DR1Ok-EWYfSwtaQXND&rel=0'
        },
        "Web Technologies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1f9Jk36XIcFAhPii17QS2je7r3IXy8q9G&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=4shALtyBalUia6HT&amp;list=PLUwI7zx-CMG1_kNkWrryGnXRdw59_hgBO&rel=0'
        },
        "Wireless Communication and Networks": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qejHdencAoQmCKISAfTpVy4O-UQ-Yqf1&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=4QEEjBUecnJ8-ErU&amp;list=PLzUKfMcBC0HTp9qvTR_cEbYNhYzNes7BG&rel=0'
        }
      }
    },
    ITE: {
      1: {
        "Applied Chemistry": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      },
      3: {
        "Computational Methods": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=im2NGAf_mv8yd3cF&amp;list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&rel=0'
        },
        "Data Stuructures": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1keYobeUkV58zcCGAFdk3TWiaesc4eo19&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        "Digital Logics and Computer Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=wSfbx3YO3f_YiVeC&amp;list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK&rel=0'
        },
        "Discrete Matthematics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jV_jTBQIOY7ytlwS3z_AdlmeqA8nfjpD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        },
        "Indian knowledge System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gNo4MMY0vWgwGKw9&amp;list=PL9MeEziOdUu7B41H23_Dl2tJjP25adLq1&rel=0'
        },
        "Object Oriented Programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y2HrMCAS7z7Y5Jslj2htSyeXmuEKI9NK&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=rc0-IDmCjUtFOscH&amp;list=PLz8TdOA7NTzSe5HdXz_nAk9kmOJLDi5ZB&rel=0'
        }
      },
      4: {
        "Circuit and Systems": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QSq2NRYXB7m8ixUmpi9vUGsjQckl4WxX&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Gejj_pBsGH-bVxV9&amp;list=PLSMKKUFl3GMCNkTqZf9vLQbOUOLgX6EdY&rel=0'
        },
        "Database Management System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ae5qyVnNNfj8xwK6jjtL36tIaOEY3Caj&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Probability Stats and linear programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WbHibtxnoGs5BnV8&amp;list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V&rel=0'
        },
        "Programming in Java": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1uiJXmyaEwyLrZJVqzEBBG2tXK7m5N3fQ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=cTOH8sIXsYIHyfDj&amp;list=PL5Rc9H5eTGY5MJYZix569VHzzV1raWWsd&rel=0'
        },
        "Technical Writing": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0'
        },
        "Theory of Computation": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tsdWI3KNOrF71KNbtCWhOTGwXWneFczu&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=tI9zYQYjKx5NohHL&amp;list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&rel=0'
        }
      },
      5: {
        "Compiler Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19QreW3bV3xNiPC14NVk4dJr5JpEPHH59&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=6Z1AelqpjSBI3iBE&amp;list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc&rel=0'
        },
        "Computer Networks": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1L8hCo9iZt2mBFV-XiHnDgFtW3ii0G4IB&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EhNGoD-RyxT1cXcA&amp;list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&rel=0'
        },
        "Design and Analysis of Algorithm": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nrq4Y4xoBP1unBuZXBKoqVaigQVKFkgo&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=m2nb5DbJyN1ScNHb&amp;list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&rel=0'
        },
        "Economics for Engineer": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CJLF1OuTlBWgUVcn&amp;list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&rel=0'
        },
        "Operating System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YEa7fbbX5jqmxZYnS3jlwB9CiaB6HSp-&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Vj-507j3UMnr4UOp&amp;list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&rel=0'
        },
        "Software Engineering": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zVmbnt2NJiPITxAkI5b2dW89djpWccLt&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=5xK8UXjtys5XKe5-&amp;list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&rel=0'
        }
      },
      6: {
        "Advanced Computer Networks ": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nknCFJUGAZhLgskbgRLjJ92purekylYd&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=BWDIHj6Hzt5cJMDM&amp;list=PL_ACaauDUVgTUy8fbBt1MnXR-8Feglflz&rel=0'
        },
        "Advanced Java Programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1AbveJXH8tjr82WVjzLxegpUc7W73QzzI&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=mVYG8XUYgAstY9ox&amp;list=PLdBwVRHjcI__HBqxd51g3j3GJSRaocWZ7&rel=0'
        },
        "Artificial Intelligence": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1sMbS5z0yKTjbyIjyUqu4bM2hF19bNdn7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=zTklJPJX_5lXi7XX&amp;list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&rel=0'
        },
        "Software Project Management": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wMBT9QtsjRYsgGF2bc99icWxE-bHzV99&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=SOW3AamDox5NZqVT&amp;list=PLh11ucJN276KHr_DR1Ok-EWYfSwtaQXND&rel=0'
        },
        "Web Technologies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1f9Jk36XIcFAhPii17QS2je7r3IXy8q9G&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=4shALtyBalUia6HT&amp;list=PLUwI7zx-CMG1_kNkWrryGnXRdw59_hgBO&rel=0'
        },
        "Wireless Communication and Networks": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qejHdencAoQmCKISAfTpVy4O-UQ-Yqf1&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=4QEEjBUecnJ8-ErU&amp;list=PLzUKfMcBC0HTp9qvTR_cEbYNhYzNes7BG&rel=0'
        }
      },
      7: {
        "Data Structures":{
          driveUrl:"https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics":{
          driveUrl:"https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      },
      8: {
        "Data Structures":{
          driveUrl:"https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics":{
          driveUrl:"https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      }
    },

    AIDS: {
      1: {
        "Applied Chemistry": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      }
    },
    AIML: {
      1: {
        "Applied Chemistry": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      }
    },
    ME: {
      1: {
        "Applied Chemistry": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      }
    },
    EEE: {
      1: {
        "Applied Chemistry": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      }
    },
    CE: {
      1: {
        "Applied Chemistry": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      }
    },
    ECE: {
      1: {
        "Applied Chemistry": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      },
      3: {
        "Computational Methods": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=im2NGAf_mv8yd3cF&amp;list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&rel=0'
        },
        "Indian knowledge System": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gNo4MMY0vWgwGKw9&amp;list=PL9MeEziOdUu7B41H23_Dl2tJjP25adLq1&rel=0'
        },
        "Signals and Systems": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1JzboJFiPmuQlp9MgFxzz1p59oUQghqAp&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=bpBWYmH_N611feLE&amp;list=PLBlnK6fEyqRhG6s3jYIU48CqsT5cyiDTO&rel=0'
        },
        "Digital Logics and Computer Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=wSfbx3YO3f_YiVeC&amp;list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK&rel=0'
        },
        "Analog Communications": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MBsMPcX1YR-NEUfek0bYOtcpvSN5LCIs&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=gGVC0v_9Pzq0Nbw3&amp;list=PLgwJf8NK-2e7uyUYrpgUUQowmRuKxRdwp&rel=0'
        },
        "Analog Electronics-1": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1FLOgftLfSVL8W69rO9m6oIyjH5_omV8U&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=LdN4H_T1E1Ja3nyN&amp;list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS&rel=0'
        }
      },
      4: {
        "Probability Stats and linear programming": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=ft70ZPSz5qZ9BhCB&amp;list=PLU6SqdYcYsfLRq3tu-g_hvkHDcorrthttps://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0cBK&rel=0'
        },
        "Technical Writing": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0'
        },
        "Network Analysis and Synthesis": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O_Zm1-wh-W8vOM8svUWv_gCzCSBtrt1V&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=3IIHpe4YQb9x_bYF&amp;list=PLXbLuD5WNA3KnewZl2kkleJVsfbiiGdTt&rel=0'
        },
        "Microprocessors and Microcontrollers": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jMzzro0xiCfNmP7kP6vBqKSvaxRaEs9x&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=px2Jr44q5xNeQdvv&amp;list=PLBlnK6fEyqRgyFCCgqdcBowmSp_BTKs4F&rel=0'
        },
        "Digital Communications": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ntwNqEKu2IjQdtpaaU9j253ASd6ukcxl&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=iOcSwfA3n2jH-SdX&amp;list=PLgwJf8NK-2e5PngHbdEadEun5XPvnn00N&rel=0'
        },
        "Analog Electronics-2": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1dQ_9SibLLNNDM1jVfgkGKybpNiRrFcpa&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=jI1R6gqsQujvOzpC&amp;list=PLgwJf8NK-2e5u1DJ5jfTcj6m1GX-cEdm8&rel=0'
        },
        "Electromagnetic Field Theory": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MSR2u7pDs9NGgtAQQ5Kc6u5eArkRT3S2&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=qy6Btu0_bDR5s5VC&amp;list=PLgwJf8NK-2e4I_YltJja47CwZJkzNWK89&rel=0'
        }
      },
      5: {
        "Economics for Engineer": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=CJLF1OuTlBWgUVcn&amp;list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&rel=0'
        },
        "Digital Signal Processing": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mkDftLKOqagh3bpgAtgb9zMdNc1xRfY7&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=OxUAfaQjLE6jz8EC&amp;list=PLXOYj6DUOGrpVb7_cCB1pZuGH4BFlp61B&rel=0'
        },
        " Microelectronics ": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1PriVAj27agLee1RuYfDAX2NVbvHh8a0K&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=O3KU7TkRB0AzofFB&amp;list=PLgwJf8NK-2e6au9bX9P_bA3ywxqigCsaC&rel=0'
        },
        "Introduction to Control Systems": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=18zAPgiwJYpHz5u3I8rcZSZgf_abfvSRc&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=vViUI_tOWvcy3Zja&amp;list=PLBlnK6fEyqRhqzJT87LsdQKYZBC93ezDo&rel=0'
        },
        "Transmission Lines, Waveguides and Antenna Design": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1fL6cIvuVCLEilujL0EbEnjVtQZDIp_U8&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=s7AzYR-nnOgqkuKi&amp;list=PLgwJf8NK-2e7tzLIDL4aXUbtRFY3ykmkT&rel=0'
        },
        "Data Communication and Networking": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qxWncxe7w26PgGZ_yS5I1zmh4mrq6fVU&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=foL7pROJbhLsfXFO&amp;list=PLV8vIYTIdSnYgxRYBC7blHaVUGFHUXLns&rel=0'
        }
      },
      6: {
        "Principles of Management for Engineers ": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zCoa9gEirwTD68aASALjzyzm_qKsfi2b&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=_syJXI1D-qJLCPoP&amp;list=PLzs7q4LSx_lTd42jaMK45vE2fWwhxcJzp&rel=0'
        },
        "Universal Human Values": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1SsxwVhiBRUwGf02qj2OLaNsFuzQefL-b&allowdl=no`,
          youtubeUrl:'https://www.youtube.com/embed/videoseries?si=R2xM1VERNTAVziKw&amp;list=PLBvTTYUOHEmeYjzc3qrXrX5O6VQhgGEA-&rel=0'
        },
        "Programme Core Elective Paper (PCE -1)": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qaig0kegXt1MXYSOqOF1A79dP92g9D1H&allowdl=no`,
          youtubeUrl:''
        },
        "Programme Core Elective Paper (PCE -2)": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=13FDCI5Y1vrSVEw1wJMMmty_RbWfYazPE&allowdl=no`,
          youtubeUrl:''
        },
        "Programme Core Elective Paper (PCE -3)": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XAFqxwGA6ChB6HEL-Vt2iIQe6lY2V8Li&allowdl=no`,
          youtubeUrl:''
        },
        "Emerging Area/Open Area Elective Paper (EAE – 1 /OAE – 1)": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Dlj9ZZHXMZhY0fS974Zp06Lgacb8BvxM&allowdl=no`,
          youtubeUrl:''
        },
        "Emerging Area/Open Area Elective Paper (EAE – 2 /OAE – 2)": {
          driveUrl:`https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Gtg92KEcLTMlIikumQ5l9AtCBtLRliG-&allowdl=no`,
          youtubeUrl:''
        }
      }
    }
  };

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
    setSemester("");
    setSubject("");
    setNotesLink("");
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
    setSubject("");
    setNotesLink("");
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    setNotesLink(subjects[branch][semester][e.target.value].driveUrl);
    setYoutubeLink(subjects[branch][semester][e.target.value].youtubeUrl);
  };

  const handleYoutube = () => {
    setShowYoutubeIframe(true)
    setTitleName('Playlist')
  }; 

  const handleNotes = () => {
    setShowYoutubeIframe(false)
    setTitleName('Notes')
  };
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden lg:flex lg:space-x-8">
        <div className="bg-indigo-700 py-6 px-8 lg:w-1/3">
          <h1 className="text-3xl font-bold text-white text-center">
            B.Tech Notes
          </h1>
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Branch
                </label>
                <select
                  value={branch}
                  onChange={handleBranchChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="">Select Branch</option>
                  {branches.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>
              {branch && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Select Semester
                  </label>
                  <select
                    value={semester}
                    onChange={handleSemesterChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="">Select Semester</option>
                    {semesters.map((sem) => (
                      <option key={sem} value={sem}>
                        {sem}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {semester && subjects[branch] && subjects[branch][semester] && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Select Subject
                  </label>
                  <select
                    value={subject}
                    onChange={handleSubjectChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="">Select Subject</option>
                    {Object.keys(subjects[branch][semester]).map((subj) => (
                      <option key={subj} value={subj}>
                        {subj}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className='flex space-x-4'>
                {subject && <button className='text-white border-1 pr-4  pt-2 pb-2 pl-4 rounded-md bg-gray-700  text-sm' onClick={handleNotes}>Notes</button>}
                {subject && <button className='text-white border-1 pr-4  pt-2 pb-2 pl-4 rounded-md bg-gray-700  text-sm' onClick={handleYoutube}>Playlist</button>}
              </div>
            </div>
          </div>
        </div>
        {notesLink && (
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden lg:w-2/3">
            <div className="bg-purple-700 py-4 px-6 lg:mt-0 mt-5">
              <h2 className="text-2xl font-semibold text-white">{titleName}</h2>
            </div>
            <div className="p-4">
              {!showYoutubeIframe && <iframe
                src={notesLink.replace("/view", "/preview")}
                title="Notes"
                className="w-full h-[600px] border-0 rounded-lg shadow-inner bg-gray-700"
                allow="autoplay"
              />}
              {showYoutubeIframe && <iframe
                className="w-full h-[600px] border-0  shadow-inner bg-gray-700" 
                src={youtubeLink}
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesFetcher;
