# Simple React Image Slider

1. Open a command line or a **CLI** (*Command Line Interface*) or a **Git Bash** command.
2. On your **CLI** type *cd*.
3. Type *cd* + *desktop*.
4. Type *npx create-next-app* to create a react project or
create a folder project by you own typing *mkdir* + name of the folder, this allows us to create a new empty folder.
5. Type *cd* + name of the folder and press **Enter** key.
6. Inside of your folder project, we're going to create 2 folders typing *mkdir*:
    * a) public
    * b) src
7. Type the following command: *mkdir -p* + *public*, without *+* operator, this command allows us to create a public folder inside our project.
8. To create a file inside our *public* folder, we're going to type the following command: *touch public/index.html*
9. Follow the step 7 (seven) to create the *src* folder and step 8 (eight), to create new files on there, like so: *mkdir -p src* and *touch src/index.js* etc.
10. In your **CLI** type the following command: *code .* if you use VSCode, this allows us to open our VSCode.

In your VSCode you'll see the following structure.

**NAME-PROJECT**
  * :file_folder: **public**/
    * :page_facing_up: index.html
  * :file_folder: **src**/
    * :file_folder: **assets**/
      * :file_folder: **image**/
      * :file_folder: **icons**/
    * :file_folder: **components**/
      * :file_folder: **ImageSlider**/
    * :file_folder: **styles**/
    * :page_facing_up: App.js
    * :page_facing_up: App.css
    * :page_facing_up: index.js
    * :page_facing_up: index.css

11. In your **CLI** type *npm init -y* to install a *package.json* file.
12. Install dependencies to your project using **npm** or **yarn** like so *npm install package-name* if you use and *npm package*.
13. Install developer dependencies like so *npm install package-name --save-dev* or *npm install package-name -D*.
14. Create a *.gitignore* file, this file should have files that your project will not include in your repository:
>
  > * #dependencies
  > * #production
  > * #testing
  > * #misc
>
15. If you use or want to use a *webapack* file, you should install *webpack dependencies* to your project as developer dependencies, like so: *npm install or npm i webpack webapck-cli webpack-dev-server*.
16. Install as a developer dependencies babel files like so: *npm i @babel/core @babel/preset-env @babel/preset-react*.
17. Install *loaders* as a developer dependencies like so: *babel-loader css-loader sass style-loader html-loader sass-loader file-loader*.
18. Install *plugins* as a developer dependencies: *npm i mini-css-extract-plugin html-webpack-plugin*.
19. Create a *README.md* file.
20. In your **CLI** type *git init* to initialize a new *.git* file.

## Initializing our project

1. Inside our :page_facing_up: *.html* file add the following structure.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple React Image Slider</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

2. Now add the following snipet code to your :page_facing_up: index.js or main.js file, this file will contain the code that will be rendered.

```js
//index.js

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from 'App'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)
```

3. Create the :page_facing_up: App.js file and import it into our :page_facing_up: index.js file, like the example above.

```js
//App.js

import React from 'react'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import './App.css'

const App () => {
    return (
        <div className='App'>
            <ImageSlider/>
        </div>
    )
}

export default App
```

4. We will create the :page_facing_up: ImageSlider.js file that will be included in the :file_folder: folder that will have the same name as the file and this, at the same time, will be in the :file_folder: components folder, then we will import it in the :page_facing_up: file App.js, as in the previous example.

**Note**: *All :file_folder: folders that will be used in the project must go in the :file_folder: components folder*.

```js
//ImageSlider.js

import React from 'react'

const ImageSlider = () => {
    return (
      <>
        <div className='slider--container'>

        </div>
      </>
    )
}

export default ImageSlider
```

5. Once we have prepared our file, we will begin to include into our structure, a container for our buttons, a container for our image and a container for our dots.

```js
//ImageSlider.js

import React from 'react'

const ImageSlider = () => {
    return (
      <>
        <div className='slider--container'>
          <div className="button--container">
            <button className='btn'><</button>
          </div>
          <div className="items">
            <figure>
              <div className='image--container'>
                <img
                  className="image" src='' alt=''
                />
              </div>
              <figcaption className="description--container">
                <p className="status description--name" data-title="status">
                  
                </p>
                <p className="status description" data-info="anchor">
                  Photo by{" "}
                  <a href='#'>
                    name
                  </a>{" "}
                  on{" "}
                  <a href='#'>
                    host name
                  </a>
                </p>
              </figcaption>
            </figure>
            <div className="dots--container">
              
            </div>
          </div>
          <div className="button--container">
            <button className='btn'>></button>
          </div>
        </div>
      </>
    )
}

export default ImageSlider
```

The structure will look like the code above.

6. Now we will create a file that host our images as array objects like so.

```js
// slides.js

export const slides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1635063235099-fb938e1ebf52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
    title: "dal lake, srinagar",
    userLink: "https://unsplash.com/@ashni_ahlawat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    userName: "Ashni" ,
    hostLink: "https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    hostName: "Unsplash"
  },
  {}
]
```

**Note**: the link of the image in the code above was taken from [unsplash](https://unsplash.com).

7. Now we will import the :page_facing_up: slides file into our App component and we will use our slides image file as a *props* like you see in the code below.

```js
//App.js

import React from 'react'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import {slides} from '../../data/slides'
import './App.css'

const App () => {
    return (
        <div className='App'>
            <ImageSlider slides={slides}/>
        </div>
    )
}

export default App
```

8. Now, we will update our *ImageSlider* component giving functionality, first of all, we going to call react's *hooks* these will be *useState*, *useEffect*, *useRef* and *useCallback* like code below.

```js
//ImageSlider.js

import React, {useState, useEffect} from 'react'

const ImageSlider = () => {
    return (
      <>
        <div className='slider--container'>
          <div className="button--container">
            <button className='btn'><</button>
          </div>
          <div className="items">
            <figure>
              <div className='image--container'>
                <img
                  className="image" src='' alt=''
                />
              </div>
              <figcaption className="description--container">
                <p className="status description--name" data-title="status">
                  
                </p>
                <p className="status description" data-info="anchor">
                  Photo by{" "}
                  <a href='#'>
                    name
                  </a>{" "}
                  on{" "}
                  <a href='#'>
                    host name
                  </a>
                </p>
              </figcaption>
            </figure>
            <div className="dots--container">
              
            </div>
          </div>
          <div className="button--container">
            <button className='btn'>></button>
          </div>
        </div>
      </>
    )
}

export default ImageSlider
```

9. In this section we're going to create some function that help us to interact with our buttons and images and we pass *slides* as a props like so.

  * a). the *nextSlideImage* function allows us to click forward one image, until we reach the last image.
  * b). the *prevSlideImage* function allows us to click backwards through an image, until we reach the first image.
  * c). the *slides* props have all information about the content stored in the :page_facing_up: *slides.js* file.

```js
//ImageSlider.js

import React, {useState, useEffect} from 'react'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const length = slides.length;

    const nextSlideImage = () => {}

    const prevSlideImage = () => {}

    return (
      <>
        <div className='slider--container'>
          <div className="button--container">
            <button className='btn'><</button>
          </div>
          <div className="items">
            <figure>
              <div className='image--container'>
                <img
                  className="image" src='' alt=''
                />
              </div>
              <figcaption className="description--container">
                <p className="status description--name" data-title="status">
                  
                </p>
                <p className="status description" data-info="anchor">
                  Photo by{" "}
                  <a href='#'>
                    name
                  </a>{" "}
                  on{" "}
                  <a href='#'>
                    host name
                  </a>
                </p>
              </figcaption>
            </figure>
            <div className="dots--container">
              
            </div>
          </div>
          <div className="button--container">
            <button className='btn'>></button>
          </div>
        </div>
      </>
    )
}

export default ImageSlider
```

10. Now we're going to work on the *nextSlidImage* function, this function allows us to click forward one image when we press the right button like the code below.

```js
const nextSlideImage = () => {
  const newIndex = currentIndex;
  const lastImage = (newIndex === length - 1) ?
    0 : 
    newIndex + 1;
  setCurrentIndex(lastImage)
}
```

11. In this section we're going to work on the *prevSlidImage* function, like the code above, this function allows us to click backwards through an image when we press the left button like the code below.

```js
const prevSlideImage = () => {
  const newIndex = currentIndex;
  const firstImage = (newIndex === 0) ?
    length - 1 : 
    newIndex - 1;
  setCurrentIndex(firstImage)
}
```

12. Now we're going to update our *ImageSlide* component with the previous code, and we will pass the function into our button like so.

```js
//ImageSlider.js

import React, {useState, useEffect} from 'react'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const length = slides.length;

    const nextSlideImage = () => {
      const newIndex = currentIndex;
      const lastImage = (newIndex === length - 1) ?
        0 : 
        newIndex + 1;
      setCurrentIndex(lastImage)
    }

    const prevSlideImage = () => {
      const newIndex = currentIndex;
      const firstImage = (newIndex === 0) ?
        length - 1 : 
        newIndex - 1;
      setCurrentIndex(firstImage)
    }

    return (
      <>
        <div className='slider--container'>
          <div className="button--container">
            <button className='btn' onClick={prevSlideImage}><</button>
          </div>
          <div className="items">
            <figure>
              <div className='image--container'>
                <img
                  className="image" src='' alt=''
                />
              </div>
              <figcaption className="description--container">
                <p className="status description--name" data-title="status">
                  
                </p>
                <p className="status description" data-info="anchor">
                  Photo by{" "}
                  <a href='#'>
                    name
                  </a>{" "}
                  on{" "}
                  <a href='#'>
                    host name
                  </a>
                </p>
              </figcaption>
            </figure>
            <div className="dots--container">
              
            </div>
          </div>
          <div className="button--container">
            <button className='btn' onClick={nextSlideImage}>></button>
          </div>
        </div>
      </>
    )
}

export default ImageSlider
```

13. Now it's time to work with our *figure container* and pass the siblings our props and we will use the destructure method.

```js
//ImageSlider.js

import React, {useState, useEffect} from 'react'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const length = slides.length;
    const {url, title, userName, userLink, hostName, hostLink} = slides[currentIndex];

    const nextSlideImage = () => {
      const newIndex = currentIndex;
      const lastImage = (newIndex === length - 1) ?
        0 : 
        newIndex + 1;
      setCurrentIndex(lastImage)
    }

    const prevSlideImage = () => {
      const newIndex = currentIndex;
      const firstImage = (newIndex === 0) ?
        length - 1 : 
        newIndex - 1;
      setCurrentIndex(firstImage)
    }

    return (
      <>
        <div className='slider--container'>
          <div className="button--container">
            <button className='btn' onClick={prevSlideImage}><</button>
          </div>
          <div className="items">
            <figure>
              <div className='image--container'>
                <img
                  className="image" src={url} alt={title}
                />
              </div>
              <figcaption className="description--container">
                <p className="status description--name" data-title="status">
                  
                </p>
                <p className="status description" data-info="anchor">
                  Photo by{" "}
                  <a href={userLink}>
                    {userName}
                  </a>{" "}
                  on{" "}
                  <a href={hostLink}>
                    {hostName}
                  </a>
                </p>
              </figcaption>
            </figure>
            <div className="dots--container">
              
            </div>
          </div>
          <div className="button--container">
            <button className='btn' onClick={nextSlideImage}>></button>
          </div>
        </div>
      </>
    )
}

export default ImageSlider
```

14. Now we're going to create two (2) new :page_facing_up: files into our :file_folder: style folder:
  * a) *_variables.scss*: this file will store our custom properties.
  * b) *ImageSlider.scss*: this file will be imported into our *ImageSlider* component.

```scss
// custom properties
:root {
  // Primary colors
  --dark-color : #020D1D;
  --light-color: #fdfcfa;
}

// ========== VIEWPORT
$width  : 100vw;
$height : 100vh;
// ========== SIZES
$size   : 100%;
$padding: 1.5rem;
$radius : .5rem;
// ========== FONTS
$font-play: 'Play',
sans-serif;
$font-inter: 'Inter',
sans-serif;
$fnt-wgt  : .85;
$fnt-sz   : calc(($padding * $fnt-wgt) + 1vmin);
// ========== COLORS
// Secondary colors
$dark-blue: #11748A;
$dark-orange: #e5661c;
```

```scss
// ImageSlider.scss
@import '_variables';

.slider--container,
.button--container,
.image--container,
.btn,
.items,
figure {
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider--container {
  width: $size;
  max-width: 53rem;
  margin-block-start: 1rem;
  margin-block-end: 0;
  .button--container {
    .btn {
      border: 0;
      border-radius: 0;
      background-color: transparent;
      transition: transform 550ms ease-in;
      cursor: pointer;
    }
  }

  .items {
    overflow: hidden;
    position: relative;
    figure {
      flex-direction: column;
      justify-content: flex-start;
      width: inherit;
      height: 30rem;
      max-width: 50rem;
      margin-inline: 0;
      margin-block: 0;
      padding-inline: 0;
      padding-block: 0;

      .image--container {
        width: 50rem;
        height: 55rem;
        overflow: hidden;
        border-radius:calc($radius * 1.25);
        .image {
          object-fit: fill;
        }
      }
  
      .description--container {
          width: $size;
          height: 8rem;
          align-self: flex-start;
          padding-block: 0;
          padding-inline-start: calc($padding * 1.25);
          background-color: transparent;
          .status {
              margin-block: .2rem;
              margin-inline-start: calc($radius * .5);
              color: var(--light-color);
              text-transform: capitalize;
          }
          .description--name {
              font-size: calc($padding * $fnt-wgt);
              font-family: $font-inter;
              font-weight: calc(700 * $fnt-wgt);
              filter: sepia(1);
          }
          .description { 
            font-size: .85rem;
            font-family: $font-play;
          }
      }

      @media screen and (max-width: 885px) {
        & {
          max-width: 35rem;

          .description--container {
            padding-inline-start: calc($padding * 1.0125);
            .description--name {
              font-size: calc($padding * .7)
            }

            .description {
              font-size: .6rem;
            }
          }
        }
      }
    }
  }
}

span {
  display: block;
  font-family: $font-inter;
  font-weight: calc((700 * $fnt-wgt) + 1);
}
```

15. It's time to continue with our *ImageSlider* component and add more feature into it.

  * a) we're going to update our component adding *jumpSlideImage* function that allows us to jump anywhere of an images when a dot has been pressed, code below.
  * b) we're going to map our *slides* props to build dots, respectively to the content stored in *slides.js* file and put it into our *dots--container* class.

```js
//ImageSlider.js

import React, {useState, useEffect} from 'react'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const length = slides.length;
    const {url, title, userName, userLink, hostName, hostLink} = slides[currentIndex];

    const nextSlideImage = () => {
      const newIndex = currentIndex;
      const lastImage = (newIndex === length - 1) ?
        0 : 
        newIndex + 1;
      setCurrentIndex(lastImage)
    }

    const prevSlideImage = () => {
      const newIndex = currentIndex;
      const firstImage = (newIndex === 0) ?
        length - 1 : 
        newIndex - 1;
      setCurrentIndex(firstImage)
    }

    const jumpSlideImage = (slideIndex) => currentIndex(slideIndex)

    return (
      <>
        <div className='slider--container'>
          <div className="button--container">
            <button className='btn chevron--left' onClick={prevSlideImage}><</button>
          </div>
          <div className="items">
            <figure>
              <div className='image--container'>
                <img
                  className="image" src={url} alt={title}
                />
              </div>
              <figcaption className="description--container">
                <p className="status description--name" data-title="status">
                  
                </p>
                <p className="status description" data-info="anchor">
                  Photo by{" "}
                  <a href={userLink}>
                    {userName}
                  </a>{" "}
                  on{" "}
                  <a href={hostLink}>
                    {hostName}
                  </a>
                </p>
              </figcaption>
            </figure>
            <div className="dots--container">
              {slides.map((slides, index) => (
                <div className='dots--slider' key={index}>
                  <span clasName='dots' onClick={() => jumpSlideImage(index)}>.</span>
                </div>
              ))}
            </div>
          </div>
          <div className="button--container">
            <button className='btn chevron--right' onClick={nextSlideImage}>></button>
          </div>
        </div>
      </>
    )
}

export default ImageSlider
```

16. Update our *ImageSlider.scss* file with new content about the *dots--container*

```scss
@import '_variables';

.slider--container,
.button--container,
.image--container,
.dots--container,
.btn,
.items,
figure {
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider--container {
  width: $size;
  max-width: 53rem;
  margin-block-start: 1rem;
  margin-block-end: 0;
  .button--container {
    .btn {
      border: 0;
      border-radius: 0;
      background-color: transparent;
      transition: transform 550ms ease-in;
      cursor: pointer;
    }

    .chevron--left {
      padding-inline-start: 0;
      padding-inline-end: $radius;
    }

    .chevron--right {
      padding-inline-start: $radius;
      padding-inline-end: 0
    }

    &:hover .chevron--left { 
      transform: scale(1.125); 
    }

    &:hover .chevron--right { 
      transform: scale(1.125); 
    }
  }

  .items {
    overflow: hidden;
    position: relative;
    figure {
      flex-direction: column;
      justify-content: flex-start;
      width: inherit;
      height: 30rem;
      max-width: 50rem;
      margin-inline: 0;
      margin-block: 0;
      padding-inline: 0;
      padding-block: 0;

      .image--container {
        width: 50rem;
        height: 55rem;
        overflow: hidden;
        border-radius:calc($radius * 1.25);
        .image {
          object-fit: fill;
        }
      }
  
      .description--container {
          width: $size;
          height: 8rem;
          align-self: flex-start;
          padding-block: 0;
          padding-inline-start: calc($padding * 1.25);
          background-color: transparent;
          .status {
              margin-block: .2rem;
              margin-inline-start: calc($radius * .5);
              color: var(--light-color);
              text-transform: capitalize;
          }
          .description--name {
              font-size: calc($padding * $fnt-wgt);
              font-family: $font-inter;
              font-weight: calc(700 * $fnt-wgt);
              filter: sepia(1);
          }
          .description { 
            font-size: .85rem;
            font-family: $font-play;
          }
      }

      @media screen and (max-width: 885px) {
        & {
          max-width: 35rem;

          .description--container {
            padding-inline-start: calc($padding * 1.0125);
            .description--name {
              font-size: calc($padding * .7)
            }

            .description {
              font-size: .6rem;
            }
          }
        }
      }
    }

    .dots--container {
      position: absolute;
      bottom: -.5rem;
      .dots--slider { 
        .dots {
          font-size: 3rem;
          cursor: pointer;
          @media screen and (max-width: 885px){
            & {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
}

span {
  display: block;
  font-family: $font-inter;
  font-weight: calc((700 * $fnt-wgt) + 1);
}
```

17. Now we will update our *ImageSlider* component adding new *hooks* built-in react like *useRef* and *useCallback*.

  * a) *useRef*: creates a reference value that's not needed for rendering and returns an object that has a single property. Visit the following page: [useRef hook](https://react.dev/reference/react/useRef) to get more information about this hook.
  * b) *useCallback*: returns a memoized callback function, this allows us to avoid to automatically run a function on every render. If you need more information about this hook, visit the following page: [useCallback hook](https://react.dev/reference/react/useCallback).

```js
//ImageSlider.js

import React, {useState, useEffect, useRef, useCallback} from 'react'

const ImageSlider = ({slides}) => {
    ...()
}

export default ImageSlider
```

18. Now lets work with these new hooks built-in react.

Our code will looks like so.
  * a) we're going to create a variable called timerRef and we pass it our *useRef* hook with *null* property.
  * b) we're going to create a simple animation in our images, using *useRef* hook.
  * c) we will use our *useCallback* hook in our nextSlideImage to avoid re-rendering.

```js
//ImageSlider.js

import React, {useState, useEffect, useRef, useCallback} from 'react'

const ImageSlider = ({slides}) => {
    const timerRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loading, setLoading] = useState(false)

    const length = slides.length;
    const {url, title, userName, userLink, hostName, hostLink} = slides[currentIndex];

    const nextSlideImage = useCalback(() => {
      const newIndex = currentIndex;
      const lastImage = (newIndex === length - 1) ?
        0 : 
        newIndex + 1;
      setCurrentIndex(lastImage)
    }, [currentIndex, slides])

    const prevSlideImage = () => {
      const newIndex = currentIndex;
      const firstImage = (newIndex === 0) ?
        length - 1 : 
        newIndex - 1;
      setCurrentIndex(firstImage)
    }

    const jumpSlideImage = (slideIndex) => currentIndex(slideIndex)

    useEffect(() => {
      timerRef.current = clearTimeout(timerRef.current)

      try {
        if(!loading) setLoading(true)
        timerRef.current = setTimeout(() => {
          nextSlideImage()
        }, 2000)

      }catch(error){
        console.log(error.message)
      }

      return () => {
        if(!Array.isArray(slides) || length <= 0) return null

        clearTimeout(timerRef.current)
      }
    }, [nextSlideImage])

    if(!loading) return 'Loading...'

    return (
      <>
        <div className='slider--container'>
          <div className="button--container">
            <button className='btn chevron--left' onClick={prevSlideImage}><</button>
          </div>
          <div className="items">
            <figure>
              <div className='image--container'>
                <img
                  className="image" src={url} alt={title}
                />
              </div>
              <figcaption className="description--container">
                <p className="status description--name" data-title="status">
                  
                </p>
                <p className="status description" data-info="anchor">
                  Photo by{" "}
                  <a href={userLink}>
                    {userName}
                  </a>{" "}
                  on{" "}
                  <a href={hostLink}>
                    {hostName}
                  </a>
                </p>
              </figcaption>
            </figure>
            <div className="dots--container">
              {slides.map((slides, index) => (
                <div className='dots--slider' key={index}>
                  <span clasName='dots' onClick={() => jumpSlideImage(index)}>.</span>
                </div>
              ))}
            </div>
          </div>
          <div className="button--container">
            <button className='btn chevron--right' onClick={nextSlideImage}>></button>
          </div>
        </div>
      </>
    )
}

export default ImageSlider
```

19. Now in your terminal **CLI** or **Git Bash** type *npm start* to run your React project, you will see something like the image below.

![image-slider](https://github.com/dponcez/react-image-slider/assets/69610351/4602262c-9f24-4e7f-a6ec-a70945555281)