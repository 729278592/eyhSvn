export const API_ROOT = (process.env.NODE_ENV === 'production')
			? 'http://www.jdl800.com/fric/'
			:'http://www.jdl800.com/fric/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
			? '.jdl800.com'
			:''

export const imgUrlFric = (process.env.NODE_ENV === 'production')
  ? 'http://www.jdl800.com/fric'
  :'http://www.jdl800.com/fric'

export const imgUrl = (process.env.NODE_ENV === 'production')
  ? 'http://www.jdl800.com'
  :'http://www.jdl800.com'
