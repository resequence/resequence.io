import * as React from "react"

import * as indexStyles from "./index.module.css"

// markup
const IndexPage = () => {
  return (
    <div className={indexStyles.container}>
      <main>
        <div className={indexStyles.title}>Hello, Cloud.</div>
        <div className={indexStyles.description}>
          We're a software consultancy that specializes in making complex systems understandable, maintainable, and scalable so that you can focus on what’s important for your business. We’d love to help you and your team build, scale, and accelerate your outcomes.
        </div>
        <div className={indexStyles.contact}>If you want to learn more about what we offer, reach out to us at <a href="mailto:hello@resequence.io">hello@resequence.io</a>.</div>
      </main>
    </div>
  )
}

export default IndexPage