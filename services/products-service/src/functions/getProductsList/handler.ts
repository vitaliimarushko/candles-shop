import { APIGatewayProxyResult } from "aws-lambda";
import { products } from "../../../../../common/mocks/data";
import { jsonResponse } from "@libs/json-response";

export const main = async (): Promise<APIGatewayProxyResult> => {
  return jsonResponse(products);
};
