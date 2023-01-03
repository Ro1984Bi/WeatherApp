import css from '../css/Loading.module.css'

function Loading() {
  return (
    <div className={css.loadingContainer}>
        <div className={css.loader}>
            <div></div>
        </div>
    </div>
  )
}

export default Loading