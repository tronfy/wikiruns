import ReactMarkdown from 'react-markdown'
import { Article } from '../types'

export type Props = {
  article: Article
  onClickLink: (href: string) => void
}

export function MDArticle({ article, onClickLink }: Props) {
  return (
    <div>
      <ReactMarkdown
        className="text-justify"
        components={{
          a: props => (
            <span
              {...props}
              className="text-sky-500 hover:underline hover:cursor-pointer"
              onClick={e => {
                e.preventDefault()
                const href = e.currentTarget.getAttribute('href')
                if (href) onClickLink(href)
              }}
            />
          ),

          h1: props => <h1 {...props} className="mb-6 text-4xl font-bold" />,
          h2: props => <h2 {...props} className="mt-5 mb-1 text-2xl font-bold" />,
          h3: props => <h3 {...props} className="mt-4 mb-1 text-xl font-bold" />,
          h4: props => <h4 {...props} className="mt-3 mb-1 text-lg font-bold" />,
          h5: props => <h5 {...props} className="mt-3 mb-1 text-lg font-bold" />,
          h6: props => <h6 {...props} className="mt-3 mb-1 text-lg font-bold" />,

          p: props => <p {...props} />,
        }}
        children={article.content}
      />
    </div>
  )
}

export default MDArticle
