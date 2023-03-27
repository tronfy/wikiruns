import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import MDArticle from './components/MDArticle'
import type { Article } from './types'

type FormInputs = {
  article: string
}

function App() {
  const [input, setInput] = useState('Astronomia')
  const [article, setArticle] = useState<Article>()

  const { register, handleSubmit } = useForm<FormInputs>()
  const onSubmit: SubmitHandler<FormInputs> = data => setInput(data.article)

  useEffect(() => {
    fetch(`http://localhost:3000/wiki/${input}`)
      .then(response => response.json())
      .then(data => setArticle(data))
  }, [input])

  return (
    <>
      <div className="flex justify-center">
        <form className="pb-5 flex gap-1" onSubmit={handleSubmit(onSubmit)}>
          <input className="w-72 px-2 h-8 rounded-lg bg-zinc-700" type="text" value={input} {...register('article')} />
          <button className="h-8 rounded-lg px-2 bg-zinc-700 hover:bg-zinc-600" type="submit">
            search
          </button>
        </form>
      </div>
      <div className="max-w-5xl mx-auto">
        {article && (
          <MDArticle
            article={article}
            onClickLink={href => {
              const article = decodeURIComponent(href).replace('_', ' ')
              console.log(article)
              setInput(article)
            }}
          />
        )}
      </div>
    </>
  )
}

export default App
