# A Special Birthday Surprise ❤️

A premium romantic birthday surprise website built with Flask + HTML + CSS + JavaScript.

## Project structure

birthday_surprise/
├── app.py
├── requirements.txt
├── templates/
│   └── index.html
└── static/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    ├── images/
    │   ├── girlfriend.jpg
    │   └── memories/
    │       ├── memory1.jpg
    │       └── memory2.jpg
    └── audio/
        └── romantic.mp3

## 1. Install Python

Make sure Python 3 is installed.

## 2. Open Terminal in this project folder

```bash
cd birthday_surprise
```

## 3. Create a virtual environment (recommended)

Mac/Linux:
```bash
python3 -m venv venv
source venv/bin/activate
```

Windows:
```bash
python -m venv venv
venv\Scripts\activate
```

## 4. Install Flask

```bash
pip install -r requirements.txt
```

## 5. Run the website

Mac/Linux:
```bash
python3 app.py
```

Windows:
```bash
python app.py
```

Then open:
http://127.0.0.1:5000

## Add your girlfriend's photo

Your uploaded photo is already placed at:

static/images/girlfriend.jpg

To replace it later, use another JPG/PNG image and keep the filename `girlfriend.jpg`, or update the image path in templates/index.html.

## Add memories

Put photos inside:
static/images/memories/

For example:
- memory1.jpg
- memory2.jpg

Then edit the `memories` array near the top of `static/js/script.js`.

## Add music

Put your music file here:
static/audio/romantic.mp3

The music does NOT autoplay. The user must click Play.

## Edit personal message

Open:
static/js/script.js

Find:
const personalMessage = `...`;

Replace the text between the backticks with your own message.

## Change name

Search `Shanu` in `templates/index.html` and replace it with the name you want.

## Change birthday date

The current countdown is set to:
2 October 2026

The date is configured in:
static/js/script.js

```js
const birthdayDate = new Date("2026-10-02T00:00:00").getTime();
```

## Important

The birthday countdown uses the visitor's local browser clock/timezone. For a simple personal surprise website, this is usually fine.

Enjoy your surprise project! ❤️
