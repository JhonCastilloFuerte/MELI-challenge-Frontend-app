import axios from 'axios';
import {build as buildItems} from './services/get_items';
import {build as buildItem} from './services/get_item';
import { HttpErrorHandler } from '../../handlers/error_handler';

import API_BASE_PATHS from "../../../constants/api_paths";

const getItems = buildItems({
  basePath: API_BASE_PATHS.urlItems,
  errorHandler: HttpErrorHandler,
  http: axios,
});

const getItem = buildItem({
  basePath: API_BASE_PATHS.urlItems,
  errorHandler: HttpErrorHandler,
  http: axios,
});

const service = {
  getItems,
  getItem
}

export default service;
export {
  getItems,
  getItem
}
