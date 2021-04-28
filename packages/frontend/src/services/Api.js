import 'dotenv/config'

import ApiProvider from '../provider/ApiProvider'
import ApiUtil from '../util/ApiUtil'

import mockPayload from './payload.json'

export default class Api {
  static async search(search, categoryId, subCategoryId, offset, totalItems, reviews_limit) {
    try {
      if (process.env.REACT_APP_DEV === 'true' && process.env.REACT_APP_MOCK === 'true')
        return mockPayload

      const limit = ApiUtil.calculateLimit(offset, totalItems)

      const queryString = ApiProvider.search(
        search,
        categoryId,
        subCategoryId,
        offset,
        limit,
        reviews_limit
      )

      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/search/?${queryString}`)

      if (response.message) throw new Error(response.message)

      const result = (await response.json()) || {}

      return result
    } catch (error) {
      console.error('Error ocurred on get payload search.', error)
      throw error
    }
  }

  static async categories() {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/categories/`)

      const data = (await response.json()) || {}

      if (!(data.categories && data.categories.length))
        throw new Error('No valid return from categories.')

      const result = data.categories

      return result
    } catch (error) {
      return console.error('Error ocurred on get payload of categories.', error)
    }
  }

  static async reviews(productId, topicId, type) {
    try {
      const queryString = ApiProvider.reviews(productId, topicId, type)

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/search/reviews/?${queryString}`
      )

      const data = (await response.json()) || {}

      if (!(data.reviews && data.reviews.length)) throw new Error('No valid return from reviews.')

      const result = data.reviews

      return result
    } catch (error) {
      return console.error(
        `Error ocurred on get payload of reviews from product ${productId}, topic ${topicId} and type ${type}.`,
        error
      )
    }
  }
}
