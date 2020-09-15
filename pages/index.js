import RulesOnMain from '../components/RulesOnMain/RulesOnMain'
import { PageLayout } from '../components/Header/PageLayout'

export default function Home() {
  return (
    <PageLayout title={'Пробить авто по номеру'}
        description={``}>
      <main className={'main'}>
        
        <div className="containerMain">
          <div className="resultBlock">
            <RulesOnMain />
          </div>
        </div>
      </main>
      </PageLayout>
  )
}
