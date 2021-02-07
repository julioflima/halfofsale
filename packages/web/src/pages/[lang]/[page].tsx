import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Dashboard } from '../../components/Dashboard'
import { routes } from '../../routes/routes'

const Pages: NextPage<any> = ({ path, component }) => (
  <>
    <Dashboard path={path} component={component} />
  </>
)

export default Pages

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = routes.map((item) => ({ params: { page: item.page } }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { page } = context.params

  const currentPage = routes.find((route) => route.page === page)

  return { props: { page: currentPage.page, component: currentPage.component } }
}
