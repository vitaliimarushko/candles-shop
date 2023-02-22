import { APIGatewayProxyResult } from "aws-lambda";
import { products } from "../../../../../mocks/data";

export const main = async (): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify(products),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
