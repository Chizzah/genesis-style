exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      product: allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
      policy: allShopifyShopPolicy {
        edges {
          node {
            type
          }
        }
      }
    }
  `)

  const productTemplate = require.resolve(
    `./src/templates/ProductPage/index.js`
  )
  const policyTemplate = require.resolve(`./src/templates/PolicyPage/index.js`)

  if (result.errors) {
    return
  }

  result.data.product.edges.forEach((product) => {
    const id = product.node.handle
    createPage({
      path: `/product/${product.node.handle}/`,
      component: productTemplate,
      context: {
        id,
      },
    })
  })

  result.data.policy.edges.forEach((policy) => {
    const id = policy.node.type
    createPage({
      path: `/${policy.node.type}/`,
      component: policyTemplate,
      context: {
        id,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
  })
}
